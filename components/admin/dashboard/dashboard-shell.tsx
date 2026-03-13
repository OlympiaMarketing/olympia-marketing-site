"use client"

import { AdminSidebar } from "@/components/admin/layout/admin-sidebar"
import { AdminTopbar } from "@/components/admin/layout/admin-topbar"
import { DashboardClient } from "./dashboard-client"

export function AdminDashboardShell() {
  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="md:ml-64">
        <AdminTopbar />
        <DashboardClient />
      </div>
    </div>
  )
}
