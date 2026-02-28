import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { tasksService } from "../../../services/supabase/tasks";
import type { Task } from "../types";

export const useTasks = () => {
  const qc = useQueryClient();

  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: tasksService.getAll,
  });

  const create = useMutation({
    mutationFn: tasksService.create,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const update = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Task> }) =>
      tasksService.update(id, updates),
    onMutate: async ({ id, updates }) => {
      await qc.cancelQueries({ queryKey: ["tasks"] });

      const prev = qc.getQueryData<Task[]>(["tasks"]);

      qc.setQueryData<Task[]>(["tasks"], (old) =>
        old?.map((t) => (t.id === id ? { ...t, ...updates } : t)),
      );

      return { prev };
    },
    onError: (_err, _vars, ctx) => {
      qc.setQueryData(["tasks"], ctx?.prev);
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const remove = useMutation({
    mutationFn: tasksService.remove,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tasks"] }),
  });

  return {
    tasks: query.data ?? [],
    isLoading: query.isLoading,
    create,
    update,
    remove,
  };
};
