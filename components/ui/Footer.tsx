export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 px-6 py-4 text-sm text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>&copy; {new Date().getFullYear()} Wonder Dashboard</span>
        <span>All systems operational</span>
      </div>
    </footer>
  );
}
