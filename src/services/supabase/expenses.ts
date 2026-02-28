import { supabase } from "./client";
import type { Expense } from "../../types/expense";

export const expensesService = {
  async getAll() {
    const { data, error } = await supabase.from("expenses").select("*");
    if (error) throw error;
    return data as Expense[];
  },
};
