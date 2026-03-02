import type { Expense } from "../../../types/expense";
import { useExpenses } from "../hooks/useExpenses";
import { ExpenseForm } from "./ExpenseForm";
import { CategoryChart } from "./CategoryChart";
import { TransactionList } from "./TransactionList";
type Props = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

export function Expenses({ expenses, setExpenses }: Props) {
  const { total, byCategory } = useExpenses(expenses);
  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };
  const removeExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };
  return (
    <div style={{ padding: "28px 32px" }}>
      {" "}
      <h1 style={{ marginBottom: 20 }}>Expenses</h1>{" "}
      <ExpenseForm onAdd={addExpense} />{" "}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 20,
          marginTop: 20,
        }}
      >
        {" "}
        <div>
          {" "}
          <h3>Total: ${total.toFixed(2)}</h3>{" "}
          <CategoryChart data={byCategory} total={total} />{" "}
        </div>{" "}
        <TransactionList expenses={expenses} onDelete={removeExpense} />{" "}
      </div>{" "}
    </div>
  );
}
