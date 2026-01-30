import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here's an overview of your recent AI video series.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider mb-2">Total Series</h3>
            <span className="text-3xl font-bold">0</span>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider mb-2">Videos Generated</h3>
            <span className="text-3xl font-bold">0</span>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider mb-2">Total Views</h3>
            <span className="text-3xl font-bold">0</span>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider mb-2">Scheduling Status</h3>
            <span className="text-sm font-medium bg-green-500/10 text-green-600 px-2 py-1 rounded-full">All Active</span>
        </div>
      </div>
      
      {/* Empty State placeholder */}
      <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed p-20 text-center">
            <div className="mb-4 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <Plus className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold">No series found</h3>
            <p className="text-muted-foreground mb-6">Create your first AI video series to get started.</p>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                + Create New Series
            </button>
      </div>
    </div>
  );
}
