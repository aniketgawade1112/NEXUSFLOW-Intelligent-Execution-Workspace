import { supabase } from "./client";
import type { Task } from "../../types/task";

export const tasksService = {
  async getAll() {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) throw error;
    return data as Task[];
  },

  async create(task: Partial<Task>) {
    const { data, error } = await supabase
      .from("tasks")
      .insert(task)
      .select()
      .single();

    if (error) throw error;
    return data as Task;
  },

  async update(id: string, updates: Partial<Task>) {
    const { data, error } = await supabase
      .from("tasks")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data as Task;
  },

  async remove(id: string) {
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (error) throw error;
  },
};
