export type OrgRole = "owner" | "admin" | "member" | "viewer"

export interface Organization {
  id: string
  name: string
  slug: string
  logo_url: string | null
  website_url: string | null
}

export interface OrganizationMembership {
  organization: Organization
  role: OrgRole
}

export type ProposalStage = "draft" | "review" | "sent" | "accepted" | "rejected"

export interface Proposal {
  id: string
  title: string
  client_name: string | null
  stage: ProposalStage
  created_at: string
  updated_at: string
  proposal_type: "custom" | "simple"
  audit_id: string | null
}

export interface Audit {
  id: string
  business_name: string
  overall_score: number | null
  created_at: string
  updated_at: string
  audit_data: Record<string, unknown>
}

export type DashboardItem =
  | (Proposal & { type: "proposal" })
  | (Audit & { type: "audit" })
