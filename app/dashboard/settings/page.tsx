export default function SettingsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="text-slate-600">
        Update preferences, notifications, and integrations for your team.
      </p>
      <form className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-500">Notification Email</span>
          <input
            type="email"
            className="mt-1 w-full rounded border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none"
            defaultValue="team@example.com"
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" defaultChecked className="h-4 w-4" />
          Weekly status updates
        </label>
        <button
          type="button"
          className="rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700"
        >
          Save changes
        </button>
      </form>
    </section>
  );
}
