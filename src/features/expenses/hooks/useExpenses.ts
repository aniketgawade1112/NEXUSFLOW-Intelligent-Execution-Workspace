import type { Expense } from "../../../types/expense";
export const EXPENSE_CATEGORIES = [
  "Infrastructure",
  "Design Tools",
  "Dev Tools",
  "Productivity",
  "Communication",
  "Other",
];
export function useExpenses(expenses: Expense[]) {
  const total = expenses.reduce((s, e) => s + e.amount, 0);
  const byCategory = EXPENSE_CATEGORIES.map((cat) => ({
    cat,
    total: expenses
      .filter((e) => e.category === cat)
      .reduce((s, e) => s + e.amount, 0),
  })).filter((x) => x.total > 0);
  const monthlyTotal = total;
  return { total, monthlyTotal, byCategory };
}
