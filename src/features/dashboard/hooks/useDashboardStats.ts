import { useQuery } from "@tanstack/react-query";
import { tasksService } from "../../../services/supabase/tasks";
import { expensesService } from "../../../services/supabase/expenses";

export const useDashboardStats = () => {
  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: tasksService.getAll,
  });

  const expensesQuery = useQuery({
    queryKey: ["expenses"],
    queryFn: expensesService.getAll,
  });

  const tasks = tasksQuery.data ?? [];
  const expenses = expensesQuery.data ?? [];

  const totalTasks = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const inProgress = tasks.filter((t) => t.status === "in_progress").length;
  const todo = tasks.filter((t) => t.status === "todo").length;

  const totalExpense = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const completion =
    totalTasks === 0 ? 0 : Math.round((completed / totalTasks) * 100);

  return {
    isLoading: tasksQuery.isLoading || expensesQuery.isLoading,
    totalTasks,
    completed,
    inProgress,
    todo,
    totalExpense,
    completion,
    tasks,
  };
};
