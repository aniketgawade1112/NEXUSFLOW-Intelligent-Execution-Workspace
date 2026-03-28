import { T } from "../../../lib/constants";
import StatCard from "./StatCard";
import RecentTasks from "./RecentTasks";
import { useDashboardStats } from "../hooks/useDashboardStats";

export default function Dashboard({ tasks = [], expenses = [] }: any) {
  const stats = useDashboardStats(tasks, expenses);

  return (
    <div style={{ padding: "32px 36px" }}>
      <h1 style={{ fontSize: 24 }}>Good morning 👋</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 16,
          marginTop: 20,
        }}
      >
        <StatCard
          label="Total Tasks"
          value={stats.total}
          icon="tasks"
          color={T.accent}
          sub={`${stats.completion}% complete`}
        />
        <StatCard
          label="In Progress"
          value={stats.inProg}
          icon="target"
          color={T.warning}
        />
        <StatCard
          label="High Priority"
          value={stats.important}
          icon="fire"
          color={T.danger}
        />
        <StatCard
          label="Monthly Spend"
          value={`$${(stats?.totalExp ?? 0).toFixed(0)}`}
          icon="expense"
          color={T.success}
        />
      </div>

      <div style={{ marginTop: 24 }}>
        <RecentTasks tasks={stats?.recent ?? []} />
      </div>
    </div>
  );
}
