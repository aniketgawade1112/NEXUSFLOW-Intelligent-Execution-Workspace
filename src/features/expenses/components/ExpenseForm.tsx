import { useState } from "react";
import { EXPENSE_CATEGORIES } from "../hooks/useExpenses";
import type { Expense } from "../../../types/expense";

type NewExpense = Omit<Expense, "id" | "user_id" | "created_at">;

type Props = {
  onAdd: (expense: NewExpense) => void;
};

export function ExpenseForm({ onAdd }: Props) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Infrastructure",
    date: new Date().toISOString().split("T")[0],
  });

  const submit = () => {
    if (!form.title || !form.amount) return;

    onAdd({
      title: form.title,
      amount: parseFloat(form.amount),
      category: form.category,
      date: form.date,
    });

    setForm({
      title: "",
      amount: "",
      category: "Infrastructure",
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
      />

      <select
        value={form.category}
        onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
      >
        {EXPENSE_CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
      />

      <button onClick={submit}>Add</button>
    </div>
  );
}
