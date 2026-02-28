import type { Task } from "../../../types/task";

type Reminder = {
  id: string;
  title: string;
  datetime: string;
};

export type CalendarItem =
  | (Task & { _type: "task" })
  | (Reminder & { _type: "reminder" });

export function useCalendarData(tasks: Task[], reminders: Reminder[]) {
  const getItemsForDate = (date: string): CalendarItem[] => {
    const taskItems = tasks
      .filter((t) => t.dueDate === date)
      .map((t) => ({ ...t, _type: "task" as const }));

    const reminderItems = reminders
      .filter((r) => r.datetime.startsWith(date))
      .map((r) => ({ ...r, _type: "reminder" as const }));

    return [...taskItems, ...reminderItems];
  };

  return { getItemsForDate };
}
