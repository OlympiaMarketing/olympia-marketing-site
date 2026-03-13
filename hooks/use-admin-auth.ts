"use client"

import { useState, useEffect } from "react"
import type { User, Session } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase"
import type { Organization, OrganizationMembership, OrgRole } from "@/types/admin"

export function useAdminAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [organization, setOrganization] = useState<Organization | null>(null)
  const [orgRole, setOrgRole] = useState<OrgRole | null>(null)
  const [memberships, setMemberships] = useState<OrganizationMembership[]>([])

  useEffect(() => {
    const checkAdminStatus = async (userId: string) => {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle()

      setIsAdmin(!!data)
    }

    const loadOrganizations = async (userId: string) => {
      const { data: membershipData, error } = await supabase
        .from("organization_members")
        .select(`
          role,
          organization:organizations (
            id,
            name,
            slug,
            logo_url,
            website_url
          )
        `)
        .eq("user_id", userId)

      if (error) return

      if (membershipData && membershipData.length > 0) {
        const orgs: OrganizationMembership[] = membershipData
          .filter((m) => m.organization)
          .map((m) => ({
            organization: m.organization as unknown as Organization,
            role: m.role as OrgRole,
          }))

        setMemberships(orgs)

        const savedOrgId = localStorage.getItem("selectedOrganizationId")
        const savedOrg = orgs.find((m) => m.organization.id === savedOrgId)

        if (savedOrg) {
          setOrganization(savedOrg.organization)
          setOrgRole(savedOrg.role)
        } else if (orgs.length > 0) {
          setOrganization(orgs[0].organization)
          setOrgRole(orgs[0].role)
          localStorage.setItem("selectedOrganizationId", orgs[0].organization.id)
        }
      }
    }

    const ensureProfileRow = async (sessionUser: User) => {
      if (!sessionUser.email) return

      const fullName =
        typeof sessionUser.user_metadata?.full_name === "string"
          ? sessionUser.user_metadata.full_name
          : null

      await supabase
        .from("profiles")
        .upsert(
          {
            id: sessionUser.id,
            email: sessionUser.email,
            full_name: fullName,
          },
          { onConflict: "id" }
        )
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)

        if (session?.user) {
          setTimeout(() => {
            ensureProfileRow(session.user).catch(() => {})
            checkAdminStatus(session.user.id)
            loadOrganizations(session.user.id)
          }, 0)
        } else {
          setIsAdmin(false)
          setOrganization(null)
          setOrgRole(null)
          setMemberships([])
        }
      }
    )

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        await ensureProfileRow(session.user)
        await checkAdminStatus(session.user.id)
        await loadOrganizations(session.user.id)
      }

      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const switchOrganization = (orgId: string) => {
    const membership = memberships.find((m) => m.organization.id === orgId)
    if (membership) {
      setOrganization(membership.organization)
      setOrgRole(membership.role)
      localStorage.setItem("selectedOrganizationId", orgId)
    }
  }

  const signOut = async () => {
    localStorage.removeItem("selectedOrganizationId")
    await supabase.auth.signOut()
  }

  return {
    user,
    session,
    loading,
    isAdmin,
    signOut,
    organization,
    orgRole,
    memberships,
    switchOrganization,
  }
}
