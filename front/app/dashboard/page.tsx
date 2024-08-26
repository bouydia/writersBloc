export default function Dashboard() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-lg font-semibold md:text-2xl mb-2">Dashbaord</h1>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm  "
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no users yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Create your first user to get started
          </p>
        </div>
      </div>
    </div>
  );
}
