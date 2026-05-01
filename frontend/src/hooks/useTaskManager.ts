import { useEffect, useState } from "react";
import type { Payload, Task } from "@/types/TaskManager.types";
import { TaskManager } from "@/services/TaskManager";

export const useTaskManager = (manager: TaskManager) => {
  // Przechowywanie zadań w stanie komponentu i synchronizacja z TaskManagerem
  // setTasks jest callbackiem dla TaskManager.subscribe
  const [tasks, setTasks] = useState<Task[]>(() => manager.getTasks());

  useEffect(() => {
    // Podłączenie do TaskManagera
    const unsubscribe = manager.subscribe(setTasks);
    return unsubscribe; // Odłączenie przy odmontowaniu komponentu
  }, [manager]);

  /** Udostępnia metody do manipulacji zadaniami:
   * tasks: Aktualna lista zadań
   * addTask: Dodaj zadanie
   * deleteTask: Usuń zadanie
   * updateTask: Zaktualizuj zadanie
   */
  return {
    tasks,
    addTask: (payload: Payload) => manager.addTask(payload),
    deleteTask: (id: string) => manager.deleteTask(id),
    updateTask: (id: string, patch: Partial<Task>) => manager.updateTask(id, patch),
    toggleTaskStatus: (id: string) => manager.toggleTaskStatus(id),
  };
};
