"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type SidebarItem = {
  label: string;
  href: string;
};

export function Sidebar({ items }: { items: SidebarItem[] }) {
  const pathname = usePathname();

  return (
    <aside className="w-full max-w-[220px] rounded-lg border border-slate-200 bg-white shadow-sm">
      <nav className="flex flex-col gap-1 py-4">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-6 py-2 text-sm transition-colors border-l-4 ${
                isActive
                  ? "font-semibold border-slate-900 text-slate-900"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
