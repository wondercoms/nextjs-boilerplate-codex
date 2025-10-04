export default function OverviewPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <p className="text-slate-600">
        Track high-level metrics and recent activity for your workspace.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 p-4 shadow-sm">
          <h2 className="text-sm font-medium text-slate-500">Active Users</h2>
          <p className="mt-2 text-3xl font-semibold">1,248</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-4 shadow-sm">
          <h2 className="text-sm font-medium text-slate-500">Bounce Rate</h2>
          <p className="mt-2 text-3xl font-semibold">32%</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-4 shadow-sm">
          <h2 className="text-sm font-medium text-slate-500">Uptime</h2>
          <p className="mt-2 text-3xl font-semibold">99.9%</p>
        </div>
      </div>
    </section>
  );
}
