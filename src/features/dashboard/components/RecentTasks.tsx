import Badge from "../../../components/ui/Badge";
import { fmt } from "../../../lib/utils";
import { T } from "../../../lib/constants";

export default function RecentTasks({ tasks = [] }: any) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {tasks?.map((t: any) => (
        <div
          key={t.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 12px",
            background: T.bg,
            borderRadius: 8,
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13 }}>{t.title}</div>
            <div style={{ fontSize: 11, color: T.muted }}>
              {t.dueDate ? fmt(t.dueDate) : "No due date"}
            </div>
          </div>

          <Badge
            color={
              t.status === "completed"
                ? T.success
                : t.status === "in_progress"
                  ? T.warning
                  : T.muted
            }
            small
          >
            {t.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
