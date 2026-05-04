import { useEffect, useState } from "react";
import type { NewTaskPayload, Task } from "@/types/TaskManager.types";
import { TaskManager } from "@/services/TaskManager";
import { useTaskManagerContext } from "@/context/TaskManagerContext";

export const useTaskManager = (manager?: TaskManager) => {
  // Jeśli nie podano managera, pobierz go z kontekstu
  const resolvedManager = manager ?? useTaskManagerContext();

  const [tasks, setTasks] = useState<Task[]>(() => resolvedManager.getTasks());

  useEffect(() => {
    const unsubscribe = resolvedManager.subscribe(setTasks);
    return unsubscribe;
  }, [resolvedManager]);

  /** Udostępnia metody do manipulacji zadaniami:
   * tasks: Aktualna lista zadań
   * addTask: Dodaj zadanie
   * deleteTask: Usuń zadanie
   * updateTask: Zaktualizuj zadanie
   * clearTasks: Wyczyść zadania
   */
  return {
    tasks,
    addTask: (payload: NewTaskPayload) => resolvedManager.addTask(payload),
    deleteTask: (id: string) => resolvedManager.deleteTask(id),
    updateTask: (id: string, patch: Partial<Task>) => resolvedManager.updateTask(id, patch),
    toggleTaskStatus: (id: string) => resolvedManager.toggleTaskStatus(id),
    clearTasks: () => resolvedManager.clearTasks(),
  };
};
