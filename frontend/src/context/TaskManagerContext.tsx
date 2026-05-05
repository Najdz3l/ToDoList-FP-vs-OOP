import React, { createContext, useContext, useMemo } from "react";
import type { Task } from "@/types/TaskManager.types";
import { generateUniqueId } from "@/utils/generateUniqueId";
import type { TaskManager } from "@/types/TaskManager.types";
import { initTaskStore, taskManager } from "@/services/TaskManager";

interface Props {
  children: React.ReactNode;
}

// Tworzenie kontekstu dla TaskManagera
const TaskManagerContext = createContext<TaskManager | null>(null);

/**
 * @summary Provider dla TaskManagera.
 * @description TaskManagerProvider jest komponentem, który otacza część aplikacji. Pozwala na uniknięcie Prop Drillingu.
 * @param children - Komponenty potomne, które będą miały dostęp do TaskManagera.
 * @returns JSX.Element - Provider z wartością TaskManagera, który jest dostępny dla wszystkich komponentów potomnych.
 */
export const TaskManagerProvider: React.FC<Props> = ({ children }) => {
  // useMemo zapewnia, że TaskManager jest singletonem, i nie jest tworzony przy każdym renderze.
  const manager = useMemo(() => {
    const initial: Task[] = [
      { taskId: generateUniqueId(), date: "2004-12-18", title: "Najdz3l", status: "Active" },
      { taskId: generateUniqueId(), date: "2006-04-10", title: "Sachiko7552", status: "Completed" },
    ];

    initTaskStore(initial);
    return taskManager;
  }, []);

  // Udostępnienie TaskManagera wszystkim komponentom potomnym poprzez kontekst
  return <TaskManagerContext.Provider value={manager}>{children}</TaskManagerContext.Provider>;
};

/**
 * @summary Hook do pobierania TaskManagera z kontekstu.
 * @returns TaskManager - Instancja TaskManagera dostępna dla komponentów potomnych.
 */
export const useTaskManagerContext = (): TaskManager => {
  const ctx = useContext(TaskManagerContext);
  if (!ctx) throw new Error("useTaskManagerContext must be used within TaskManagerProvider");
  return ctx;
};
