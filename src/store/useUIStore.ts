import { create } from "zustand";
import type { Task } from "../features/tasks/types";

type UIState = {
  modalOpen: boolean;
  selectedTask: Task | null;
  openModal: (task?: Task) => void;
  closeModal: () => void;

  sidebarCollapsed: boolean;
  toggleSidebar: () => void;

  sectionCollapsed: Record<string, boolean>;
  toggleSection: (id: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
  modalOpen: false,
  selectedTask: null,

  openModal: (task) =>
    set({
      modalOpen: true,
      selectedTask: task ?? null,
    }),

  closeModal: () =>
    set({
      modalOpen: false,
      selectedTask: null,
    }),

  sidebarCollapsed: false,
  toggleSidebar: () =>
    set((s) => ({
      sidebarCollapsed: !s.sidebarCollapsed,
    })),

  sectionCollapsed: {},

  toggleSection: (id) =>
    set((s) => ({
      sectionCollapsed: {
        ...s.sectionCollapsed,
        [id]: !s.sectionCollapsed[id],
      },
    })),
}));
