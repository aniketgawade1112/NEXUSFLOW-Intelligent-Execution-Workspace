export type TaskStatus = "todo" | "in_progress" | "completed";

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  category: "normal" | "important";
  labels: string[];
  due_date?: string;
  created_at: string;
};
