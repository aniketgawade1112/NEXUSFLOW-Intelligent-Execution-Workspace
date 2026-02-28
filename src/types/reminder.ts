export type Reminder = {
  id: string;
  user_id: string;
  title: string;
  datetime: string;
  linked_task_id?: string | null;
  created_at: string;
};
