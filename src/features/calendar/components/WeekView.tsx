import type { Task } from "../../../types/task";
import { useCalendarData } from "../hooks/useCalendarData";

type Reminder = {
  id: string;
  title: string;
  datetime: string;
};

type Props = {
  current: Date;
  tasks: Task[];
  reminders: Reminder[];
};

export function WeekView({ current, tasks, reminders }: Props) {
  const { getItemsForDate } = useCalendarData(tasks, reminders);

  const start = new Date(current);
  start.setDate(current.getDate() - current.getDay());

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });

  const fmt = (d: Date) => d.toISOString().split("T")[0];

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8 }}
    >
      {days.map((d) => {
        const items = getItemsForDate(fmt(d));

        return (
          <div
            key={fmt(d)}
            style={{
              border: "1px solid #1E1E2E",
              borderRadius: 8,
              padding: 8,
              background: "#111118",
              minHeight: 200,
            }}
          >
            <div style={{ fontSize: 12, marginBottom: 6 }}>
              {d.toLocaleDateString("en-US", { weekday: "short" })}
            </div>

            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  fontSize: 11,
                  marginBottom: 4,
                  padding: "4px 6px",
                  borderRadius: 4,
                  background:
                    item._type === "task"
                      ? "rgba(99,102,241,0.3)"
                      : "rgba(245,158,11,0.3)",
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
