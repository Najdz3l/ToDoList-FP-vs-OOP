import { useEffect, useState } from "react";
import type { NewTaskPayload, Task, TaskManagerExportFormat } from "@/types/TaskManager.types";
import type { TaskManager } from "@/types/TaskManager.types";
import { useTaskManagerContext } from "@/context/TaskManagerContext";

/**
 * @summary Hook do korzystania z TaskManagera. Umożliwia dostęp do listy zadań i operacji na nich.
 * @param manager Opcjonalny TaskManager. Jeśli nie zostanie podany, hook użyje TaskManagera z kontekstu.
 * @returns Obiekt z listą zadań i funkcjami do ich modyfikacji.
 */
export const useTaskManager = (manager?: TaskManager) => {
  const resolvedManager = manager ?? useTaskManagerContext();

  // Stan lokalny do przechowywania aktualnej listy zadań
  const [tasks, setTasks] = useState<Task[]>(() => resolvedManager.getTasks());

  useEffect(() => {
    // Subskrybuj się do zmian w TaskManagerze i aktualizuj lokalny stan
    const unsub = resolvedManager.subscribe((next) => setTasks(next));

    // Pobierz aktualną listę zadań przy montowaniu komponentu
    setTasks(resolvedManager.getTasks());

    // Odsubskrybuj się przy odmontowywaniu komponentu, aby uniknąć wycieków pamięci
    return unsub;
  }, [resolvedManager]);

  // Zwracamy tylko listę zadań oraz funkcje do jej modyfikacji.
  // Ukrywamy bezpośredni dostęp do TaskManagera, aby wymusić korzystanie z udostępnionych metod.
  return {
    tasks,
    addTask: (payload: NewTaskPayload) => resolvedManager.addTask(payload),
    deleteTask: (id: string) => resolvedManager.deleteTask(id),
    updateTask: (id: string, patch: Partial<Task>) => resolvedManager.updateTask(id, patch),
    toggleTaskStatus: (id: string) => resolvedManager.toggleTaskStatus(id),
    clearTasks: () => resolvedManager.clearTasks(),
    exportTasks: (format: TaskManagerExportFormat) => resolvedManager.exportTasks(format),
  };
};
