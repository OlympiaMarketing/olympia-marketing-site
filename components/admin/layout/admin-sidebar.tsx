"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  Wrench,
  Settings,
  Globe,
  Search,
  Database,
  Ship,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface NavGroup {
  label: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { label: "Proposals", href: "/admin/proposals", icon: FileText },
      { label: "Clients", href: "/admin/clients", icon: Users },
      { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    ],
  },
  {
    label: "Tools",
    items: [
      { label: "Lead Search", href: "/admin/tools/lead-search", icon: Search },
      { label: "Keywords", href: "/admin/tools/keywords", icon: Globe },
      { label: "Dealer Research", href: "/admin/tools/dealer-research", icon: Database },
      { label: "Marina Data", href: "/admin/tools/marina-data", icon: Ship },
      { label: "Website Generator", href: "/admin/tools/website-generator", icon: Wrench },
    ],
  },
  {
    label: "Admin",
    items: [
      { label: "Settings", href: "/admin/settings", icon: Settings },
    ],
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-border bg-card md:block">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Link href="/admin/dashboard" className="text-lg font-semibold text-foreground">
          Olympia Admin
        </Link>
      </div>
      <nav className="space-y-6 p-4">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {group.label}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
