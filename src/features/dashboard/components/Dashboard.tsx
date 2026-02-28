import { useDashboardStats } from "../hooks/useDashboardStats";
import { StatCard } from "./StatCard";

export default function Dashboard() {
  const stats = useDashboardStats();

  if (stats.isLoading) {
    return <div style={{ padding: 30 }}>Loading dashboard...</div>;
  }

  return (
    <div style={{ padding: 28 }}>
      <h1 style={{ marginBottom: 20 }}>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 14,
        }}
      >
        <StatCard
          label="Total Tasks"
          value={stats.totalTasks}
          sub={`${stats.completion}% complete`}
        />

        <StatCard
          label="In Progress"
          value={stats.inProgress}
          sub={`${stats.todo} todo`}
        />

        <StatCard label="Completed" value={stats.completed} />

        <StatCard
          label="Expenses"
          value={`$${stats.totalExpense.toFixed(2)}`}
        />
      </div>
    </div>
  );
}
