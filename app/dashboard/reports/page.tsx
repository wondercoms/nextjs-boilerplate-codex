export default function ReportsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Reports</h1>
      <p className="text-slate-600">
        Generate and download detailed reports across your teams.
      </p>
      <div className="rounded-lg border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-medium">Monthly Summary</h2>
        <p className="mt-2 text-sm text-slate-500">
          Export usage, revenue, and support metrics in CSV or PDF format.
        </p>
      </div>
    </section>
  );
}
