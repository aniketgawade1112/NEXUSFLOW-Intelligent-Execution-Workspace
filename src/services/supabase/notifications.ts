import { supabase } from "./client";

export async function insertNotification(taskId: string) {
  const { data } = await supabase
    .from("notifications")
    .select("*")
    .eq("task_id", taskId)
    .maybeSingle();

  if (data) return false;

  await supabase.from("notifications").insert({
    task_id: taskId,
    created_at: new Date().toISOString(),
  });

  return true;
}
