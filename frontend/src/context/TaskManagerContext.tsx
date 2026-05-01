import React, { createContext, useContext, useMemo } from "react";
import { TaskManager } from "@/services/TaskManager";
import type { Task } from "@/types/TaskManager.types";
import { generateUniqueId } from "@/utils/generateUniqueId";

// Context pomaga w uniknięciu prop drilling'u
// prop drilling - Przekazywanie propów przez wiele poziomów komponentów

interface Props {
  children: React.ReactNode;
}

// Tworzenie kontekstu dla TaskManagera
const TaskManagerContext = createContext<TaskManager | null>(null);

export const TaskManagerProvider: React.FC<Props> = ({ children }) => {
  // useMemo zapewnia, że TaskManager jest tworzony tylko raz, a nie przy każdym renderze
  const manager = useMemo(() => {
    const initial: Task[] = [
      { taskId: generateUniqueId(), date: "2004-12-18", title: "Najdz3l", status: "Active" },
      { taskId: generateUniqueId(), date: "2006-04-10", title: "Sachiko7552", status: "Completed" },
    ];

    return new TaskManager(initial);
  }, []);

  // Udostępnienie TaskManagera wszystkim komponentom potomnym poprzez kontekst
  return <TaskManagerContext.Provider value={manager}>{children}</TaskManagerContext.Provider>;
};

// Pobiera TaskManager z contextu
// Wyrzuca błąd jeśli hook został użyty poza Providerem
export const useTaskManagerContext = (): TaskManager => {
  const ctx = useContext(TaskManagerContext);
  if (!ctx) throw new Error("useTaskManagerContext must be used within TaskManagerProvider");
  return ctx;
};
