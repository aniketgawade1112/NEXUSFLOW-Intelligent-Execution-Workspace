import type { Expense } from "../../../types/expense";
type Props = { expenses: Expense[]; onDelete: (id: string) => void };
export function TransactionList({ expenses, onDelete }: Props) {
  return (
    <div>
      {" "}
      {expenses.map((e) => (
        <div
          key={e.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0",
            borderBottom: "1px solid #1E1E2E",
          }}
        >
          {" "}
          <div>
            {" "}
            <div>{e.title}</div> <small>{e.category}</small>{" "}
          </div>{" "}
          <div>
            {" "}
            ${e.amount.toFixed(2)}{" "}
            <button onClick={() => onDelete(e.id)}>✕</button>{" "}
          </div>{" "}
        </div>
      ))}{" "}
    </div>
  );
}
