import { useState } from "react";
import { MonthView } from "./MonthView";
import { WeekView } from "./WeekView";
import type { Task } from "../../../types/task";

type Reminder = {
  id: string;
  title: string;
  datetime: string;
};

type Props = {
  tasks: Task[];
  reminders: Reminder[];
};

export function Calendar({ tasks, reminders }: Props) {
  const [current, setCurrent] = useState(new Date());
  const [view, setView] = useState<"month" | "week">("month");

  const monthName = current.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div style={{ padding: "24px 28px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <h1>{monthName}</h1>

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setView("month")}>Month</button>
          <button onClick={() => setView("week")}>Week</button>
        </div>
      </div>

      {view === "month" ? (
        <MonthView current={current} tasks={tasks} reminders={reminders} />
      ) : (
        <WeekView current={current} tasks={tasks} reminders={reminders} />
      )}
    </div>
  );
}
