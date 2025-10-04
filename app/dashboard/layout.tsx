import type { ReactNode } from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Sidebar } from "@/components/ui/Sidebar";

const sidebarItems = [
  { label: "Overview", href: "/dashboard" },
  { label: "Reports", href: "/dashboard/reports" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />
      <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-6 px-4 py-6 lg:flex-row">
        <Sidebar items={sidebarItems} />
        <main className="flex-1 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
