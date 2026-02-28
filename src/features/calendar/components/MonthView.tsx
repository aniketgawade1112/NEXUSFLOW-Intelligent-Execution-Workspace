import { motion } from "framer-motion";
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

export function MonthView({ current, tasks, reminders }: Props) {
  const { getItemsForDate } = useCalendarData(tasks, reminders);

  const year = current.getFullYear();
  const month = current.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: 42 }, (_, i) => {
    const d = i - firstDay + 1;
    return d >= 1 && d <= daysInMonth ? d : null;
  });

  const formatDate = (d: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(
      2,
      "0",
    )}`;

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 }}
    >
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
        <div key={d} style={{ fontSize: 11, opacity: 0.6 }}>
          {d}
        </div>
      ))}

      {days.map((day, i) => {
        const items = day ? getItemsForDate(formatDate(day)) : [];

        return (
          <motion.div
            key={i}
            whileHover={{ background: "#16161F" }}
            style={{
              minHeight: 90,
              border: "1px solid #1E1E2E",
              borderRadius: 8,
              padding: 6,
              background: day ? "#111118" : "transparent",
              opacity: day ? 1 : 0.3,
            }}
          >
            {day && (
              <>
                <div style={{ fontSize: 12, marginBottom: 4 }}>{day}</div>

                {items.slice(0, 2).map((item) => (
                  <div
                    key={item.id}
                    style={{
                      fontSize: 10,
                      padding: "2px 5px",
                      borderRadius: 4,
                      marginBottom: 2,
                      background:
                        item._type === "task"
                          ? "rgba(99,102,241,0.3)"
                          : "rgba(245,158,11,0.3)",
                    }}
                  >
                    {item.title}
                  </div>
                ))}

                {items.length > 2 && (
                  <div style={{ fontSize: 10, opacity: 0.6 }}>
                    +{items.length - 2} more
                  </div>
                )}
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
