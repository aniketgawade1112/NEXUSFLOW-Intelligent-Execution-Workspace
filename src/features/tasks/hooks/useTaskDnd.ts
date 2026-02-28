import type { TaskStatus } from "../types";

export const useTaskDnd = (
  onMove: (id: string, status: TaskStatus) => void,
) => {
  const handleDrop = (taskId: string, status: TaskStatus) => {
    onMove(taskId, status);
  };

  return { handleDrop };
};
