import { AdminProviders } from "@/components/admin/layout/admin-providers"

export const metadata = {
  title: {
    default: "Admin",
    template: "%s | Olympia Admin",
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminProviders>{children}</AdminProviders>
}
