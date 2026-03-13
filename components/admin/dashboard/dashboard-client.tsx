"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { useAdminAuth } from "@/hooks/use-admin-auth"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import {
  Plus,
  FileText,
  Calendar,
  TrendingUp,
  User,
  Trash2,
} from "lucide-react"
import type { Proposal, Audit, DashboardItem, ProposalStage } from "@/types/admin"

const STAGE_COLORS: Record<ProposalStage, string> = {
  draft: "bg-gray-100 text-gray-800 border-gray-300",
  review: "bg-blue-100 text-blue-800 border-blue-300",
  sent: "bg-purple-100 text-purple-800 border-purple-300",
  accepted: "bg-green-100 text-green-800 border-green-300",
  rejected: "bg-red-100 text-red-800 border-red-300",
}

const STAGE_LABELS: Record<ProposalStage, string> = {
  draft: "Draft",
  review: "In Review",
  sent: "Sent to Client",
  accepted: "Accepted",
  rejected: "Rejected",
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function getAuditFirstLine(auditData: Record<string, unknown>): string {
  if (!auditData) return "Marketing audit report generated"

  try {
    for (const key of ["executive_summary", "business_overview"]) {
      const value = auditData[key]
      if (!value) continue
      const text =
        typeof value === "string"
          ? value
          : (value as Record<string, string>).content ??
            (value as Record<string, string>).text ??
            ""
      if (text) {
        const firstSentence = text.split(/[.!?]\s/)[0]
        return firstSentence.length > 120
          ? firstSentence.substring(0, 120) + "..."
          : firstSentence + "."
      }
    }
  } catch {
    // fall through
  }

  return "Marketing audit report generated"
}

export function DashboardClient() {
  const { user, loading, organization } = useAdminAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [proposals, setProposals] = useState<Proposal[]>([])
  const [items, setItems] = useState<DashboardItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [timeSaved, setTimeSaved] = useState({ hours: 0, minutes: 0 })

  useEffect(() => {
    if (!user || !organization) return

    const checkOnboarding = async () => {
      const { data } = await supabase
        .from("agency_profiles")
        .select("onboarding_completed")
        .eq("organization_id", organization.id)
        .maybeSingle()

      if (!data || data.onboarding_completed === false) {
        router.push("/admin/onboarding")
      }
    }

    checkOnboarding()
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, organization])

  const loadData = async () => {
    if (!organization) return
    try {
      const { data: proposalsData, error: proposalsError } = await supabase
        .from("proposals")
        .select(
          "id, title, client_name, stage, created_at, updated_at, proposal_type, audit_id"
        )
        .eq("organization_id", organization.id)
        .is("deleted_at", null)

      if (proposalsError) throw proposalsError

      const { data: auditsData, error: auditsError } = await supabase
        .from("local_business_audits")
        .select(
          "id, business_name, overall_score, created_at, updated_at, audit_data"
        )
        .eq("organization_id", organization.id)
        .is("deleted_at", null)

      if (auditsError) throw auditsError

      const fetchedProposals = (proposalsData ?? []) as Proposal[]
      const audits = (auditsData ?? []) as Audit[]

      setProposals(fetchedProposals)

      const linkedAuditIds = new Set(
        fetchedProposals.filter((p) => p.audit_id).map((p) => p.audit_id)
      )
      const standaloneAudits = audits.filter(
        (audit) => !linkedAuditIds.has(audit.id)
      )

      const combinedItems: DashboardItem[] = [
        ...fetchedProposals.map((p) => ({ ...p, type: "proposal" as const })),
        ...standaloneAudits.map((a) => ({ ...a, type: "audit" as const })),
      ]

      combinedItems.sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      )

      setItems(combinedItems)

      const customCount = fetchedProposals.filter(
        (p) => p.proposal_type === "custom"
      ).length
      const simpleCount = fetchedProposals.filter(
        (p) => p.proposal_type === "simple"
      ).length
      const auditCount = standaloneAudits.length

      const totalMinutes = customCount * 240 + simpleCount * 150 + auditCount * 150
      setTimeSaved({
        hours: Math.floor(totalMinutes / 60),
        minutes: totalMinutes % 60,
      })
    } catch {
      toast({
        title: "Error",
        description: "Failed to load proposals and audits",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (
    itemId: string,
    itemType: "proposal" | "audit"
  ) => {
    try {
      const tableName =
        itemType === "proposal" ? "proposals" : "local_business_audits"
      const { error } = await supabase
        .from(tableName)
        .update({ deleted_at: new Date().toISOString() })
        .eq("id", itemId)

      if (error) throw error

      toast({
        title: "Success",
        description: `${itemType === "proposal" ? "Proposal" : "Audit"} archived successfully`,
      })
      loadData()
    } catch {
      toast({
        title: "Error",
        description: `Failed to archive ${itemType === "proposal" ? "proposal" : "audit"}`,
        variant: "destructive",
      })
    }
  }

  if (loading || isLoading) {
    return (
      <div className="space-y-4 p-6">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    )
  }

  if (!user) return null

  const proposalItems = items.filter(
    (item) => item.type === "proposal"
  ) as (Proposal & { type: "proposal" })[]
  const stats = {
    total: items.length,
    draft: proposalItems.filter((p) => p.stage === "draft").length,
    sent: proposalItems.filter((p) => p.stage === "sent").length,
    accepted: proposalItems.filter((p) => p.stage === "accepted").length,
  }

  return (
    <div className="mx-auto max-w-7xl p-6">
      {/* Time Saved Banner */}
      <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                {timeSaved.hours > 0 &&
                  `${timeSaved.hours} ${timeSaved.hours === 1 ? "hour" : "hours"} `}
                {timeSaved.minutes > 0 &&
                  `${timeSaved.minutes} ${timeSaved.minutes === 1 ? "minute" : "minutes"}`}
                {timeSaved.hours === 0 && timeSaved.minutes === 0 && "0 minutes"}
              </h3>
              <p className="text-muted-foreground">
                Time saved creating proposals
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {proposals.filter((p) => p.proposal_type === "custom").length}{" "}
                custom (4h ea.) +{" "}
                {proposals.filter((p) => p.proposal_type === "simple").length +
                  items.filter((i) => i.type === "audit").length}{" "}
                simple/audits (2.5h ea.)
              </p>
            </div>
            <TrendingUp className="h-16 w-16 text-primary opacity-50" />
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {[
          { label: "Total Proposals", value: stats.total, color: "" },
          { label: "Drafts", value: stats.draft, color: "text-gray-600" },
          { label: "Sent", value: stats.sent, color: "text-purple-600" },
          { label: "Accepted", value: stats.accepted, color: "text-green-600" },
        ].map(({ label, value, color }) => (
          <Card key={label}>
            <CardHeader className="pb-2 md:pb-3">
              <CardTitle className="text-xs font-medium text-muted-foreground md:text-sm">
                {label}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-3 md:pb-4">
              <div className={`text-xl font-bold md:text-3xl ${color}`}>
                {value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Items List */}
      <div className="space-y-4">
        {items.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="pt-6 text-center">
              <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 text-lg font-semibold">No Proposals Yet</h3>
              <p className="mb-4 text-muted-foreground">
                Create your first marketing proposal to get started
              </p>
              <Button onClick={() => router.push("/admin/proposals/new")}>
                <Plus className="mr-2 h-4 w-4" />
                Create Proposal
              </Button>
            </CardContent>
          </Card>
        ) : (
          items.map((item) => (
            <Card
              key={`${item.type}-${item.id}`}
              className="group relative transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <CardHeader
                className="cursor-pointer space-y-0 pb-3"
                onClick={() => {
                  if (item.type === "audit") {
                    router.push(`/admin/audits/${item.id}`)
                  } else if (
                    item.proposal_type === "simple" &&
                    item.audit_id
                  ) {
                    router.push(`/admin/audits/${item.audit_id}`)
                  } else {
                    router.push(`/admin/proposals/${item.id}`)
                  }
                }}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 flex-shrink-0" />
                    {formatDate(item.updated_at)}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(item.id, item.type)
                    }}
                  >
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </Button>
                </div>
                <CardTitle className="text-xl break-words transition-colors group-hover:text-primary">
                  {item.type === "audit" ? item.business_name : item.title}
                </CardTitle>
                {item.type === "proposal" && item.client_name && (
                  <CardDescription className="mt-1 flex items-center gap-1">
                    <User className="h-3 w-3 flex-shrink-0" />
                    <span className="truncate">{item.client_name}</span>
                  </CardDescription>
                )}
                {item.type === "audit" && (
                  <CardDescription className="mt-1.5 text-xs leading-relaxed">
                    {getAuditFirstLine(item.audit_data)}
                  </CardDescription>
                )}
                <div className="mt-3.5 flex items-center gap-2 border-t border-border/50 pt-2.5">
                  <Badge
                    variant="outline"
                    className={`h-5 py-0 text-xs ${
                      item.type === "audit"
                        ? "border-green-300 bg-green-50 text-green-700"
                        : item.proposal_type === "custom"
                          ? "border-purple-300 bg-purple-50 text-purple-700"
                          : "border-teal-300 bg-teal-50 text-teal-700"
                    }`}
                  >
                    {item.type === "audit"
                      ? "Audit"
                      : item.proposal_type === "custom"
                        ? "Custom"
                        : "Simple"}
                  </Badge>
                  {item.type === "proposal" && (
                    <Badge
                      variant="outline"
                      className={`h-5 py-0 text-xs ${STAGE_COLORS[item.stage]}`}
                    >
                      {STAGE_LABELS[item.stage]}
                    </Badge>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
