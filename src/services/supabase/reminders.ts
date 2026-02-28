import { supabase } from "./client";
import type { Reminder } from "../../types/reminder";

export const remindersService = {
  async getAll() {
    const { data, error } = await supabase.from("reminders").select("*");
    if (error) throw error;
    return data as Reminder[];
  },
};
