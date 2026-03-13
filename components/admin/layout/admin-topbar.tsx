"use client"

import { useRouter } from "next/navigation"
import { useAdminAuth } from "@/hooks/use-admin-auth"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Settings,
  LogOut,
  Building2,
  Plus,
  Menu,
  Users,
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AdminSidebar } from "./admin-sidebar"

export function AdminTopbar() {
  const router = useRouter()
  const {
    user,
    isAdmin,
    signOut,
    organization,
    memberships,
    switchOrganization,
  } = useAdminAuth()

  const showOrgSwitcher = memberships.length > 1

  const handleSignOut = async () => {
    await signOut()
    router.push("/admin/login")
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card/95 px-6 backdrop-blur-md md:justify-end">
      {/* Mobile menu trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <AdminSidebar />
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-3">
        <Button
          size="sm"
          onClick={() => router.push("/admin/proposals/new")}
          className="hidden sm:flex"
        >
          <Plus className="mr-1.5 h-4 w-4" />
          New Proposal
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{user?.email}</span>
                {organization && (
                  <span className="text-xs text-muted-foreground">
                    {organization.name}
                  </span>
                )}
                {isAdmin && (
                  <span className="text-xs font-normal text-primary">Admin</span>
                )}
              </div>
            </DropdownMenuLabel>

            {showOrgSwitcher && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                  Switch Organization
                </DropdownMenuLabel>
                {memberships.map((m) => (
                  <DropdownMenuItem
                    key={m.organization.id}
                    onClick={() => switchOrganization(m.organization.id)}
                    className={
                      m.organization.id === organization?.id ? "bg-accent" : ""
                    }
                  >
                    <Building2 className="mr-2 h-4 w-4" />
                    {m.organization.name}
                  </DropdownMenuItem>
                ))}
              </>
            )}

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/admin/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            {isAdmin && (
              <DropdownMenuItem
                onClick={() => router.push("/admin/settings/users")}
              >
                <Users className="mr-2 h-4 w-4" />
                User Management
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
