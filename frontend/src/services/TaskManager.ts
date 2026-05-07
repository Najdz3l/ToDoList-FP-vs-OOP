import type {
  NewTaskPayload,
  Task,
  TaskManagerExportFormat,
  TaskManagerExportResult,
  TaskManager,
} from "@/types/TaskManager.types";
import taskListStore from "@/services/TaskListStore";
import { generateUniqueId } from "@/utils/generateUniqueId";

// Zbiór subskrybentów, którzy chcą być powiadamiani o zmianach w liście zadań
const subs = new Set<(tasks: Task[]) => void>();

/**
 * @summary Sortuje zadania po statusie i dacie.
 * @param tasks - Lista zadań do posortowania.
 * @returns Posortowana lista zadań.
 */
const sortByStatusAndDate = (tasks: Task[]): Task[] => {
  return tasks.sort((a, b) => {
    if (a.status === b.status) {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return a.status === "Active" ? -1 : 1;
  });
};

/**
 * @summary Powiadamia subskrybentów o zmianach listy zadań.
 * @returns void
 */
const notify = (): void => {
  const snapshot = getTasks();
  subs.forEach((callback) => callback(snapshot));
};

/**
 * @summary Zwraca posortowaną listę zadań.
 * @returns Posortowana lista wszystkich zadań.
 */
export const getTasks = (): Task[] => {
  const task: Task[] = taskListStore.getTasks();
  return sortByStatusAndDate(task);
};

/**
 * @summary Ustawia nową listę i powiadamia subskrybentów.
 * @param  next - Nowa lista zadań.
 * @returns void
 */
export const setTasks = (next: Task[]): void => {
  taskListStore.setTasks(next);
  notify();
};

/**
 * @summary Inicjalizuje store zadań.
 * @param - Początkowa lista zadań.
 * @returns void
 */
export const initTaskStore = (initial: Task[] = []) => {
  taskListStore.setTasks(initial);
  notify();
};

/**
 * @summary Dodaje nowe zadanie.
 * @param payload - Dane zadania (tytuł, data).
 * @returns Nowo dodane zadanie.
 */
export const addTask = (payload: NewTaskPayload): Task => {
  const task: Task = { ...payload, taskId: generateUniqueId(), status: "Active" };
  setTasks([...getTasks(), task]);
  return task;
};

/**
 * @summary Usuwa zadanie.
 * @param taskId - ID zadania.
 * @returns void
 */
export const deleteTask = (taskId: string): void => {
  setTasks(getTasks().filter((task) => task.taskId !== taskId));
};

/**
 * @summary Aktualizuje pola zadania.
 * @param taskId - ID zadania.
 * @param patch - Pola do aktualizacji.
 * @returns void
 */
export const updateTask = (taskId: string, patch: Partial<Task>): void => {
  setTasks(getTasks().map((task) => (task.taskId === taskId ? { ...task, ...patch } : task)));
};

/**
 * @summary Przełącza status zadania.
 * @param taskId - ID zadania.
 * @returns void
 */
export const toggleTaskStatus = (taskId: string): void => {
  setTasks(
    getTasks().map((task) =>
      task.taskId === taskId ? { ...task, status: task.status === "Active" ? "Completed" : "Active" } : task,
    ),
  );
};

/**
 * @summary Usuwa wszystkie zadania.
 * @returns void
 */
export const clearTasks = (): void => {
  setTasks([]);
};

/**
 * @summary Eksportuje zadania w wybranym formacie.
 * @description Format eksportu: 'json', 'csv' lub 'txt'.
 * @param format - Format eksportu.
 * @returns Zawartość, typ MIME i nazwę pliku.
 */
export const exportTasks = (format: TaskManagerExportFormat): TaskManagerExportResult => {
  const timestamp = new Date().toISOString().split("T")[0];
  const filenameBase = `tasks-${timestamp}`;

  const selected = getTasks().map((task) => ({ date: task.date, title: task.title, status: task.status }));

  if (format === "json") {
    return { content: JSON.stringify(selected, null, 2), mime: "application/json", filename: `${filenameBase}.json` };
  }

  if (format === "csv") {
    const escape = (v: string) => {
      if (v == null) return "";
      const s = String(v);
      if (s.includes(",") || s.includes("\n") || s.includes('"')) {
        return `"${s.replace(/"/g, '""')}"`;
      }
      return s;
    };

    const header = ["date", "title", "status"].join(",");
    const rows = selected.map((r) => [escape(r.date), escape(r.title), escape(r.status)].join(",")).join("\n");
    return { content: `${header}\n${rows}`, mime: "text/csv", filename: `${filenameBase}.csv` };
  }

  // txt
  const txtHeader = "date | title | status";
  const txtBody = selected.map((r) => `${r.date} | ${r.title} | ${r.status}`).join("\n");
  return { content: `${txtHeader}\n${txtBody}`, mime: "text/plain", filename: `${filenameBase}.txt` };
};

/**
 * @summary Rejestruje callback na zmianę listy zadań.
 * @description Callback wywoływany natychmiast z aktualnym stanem.
 * @param callback - Funkcja wywoływana ze zmienioną listą.
 * @returns Funkcja unsubscribe.
 */
export const subscribe = (callback: (tasks: Task[]) => void): (() => void) => {
  subs.add(callback);
  // Od razu wywołujemy z aktualnym stanem
  callback(getTasks());
  return () => subs.delete(callback);
};

/**
 * @summary Obiekt API zarządzania zadaniami.
 */
export const taskManager: TaskManager = {
  subscribe,
  getTasks,
  addTask,
  deleteTask,
  updateTask,
  toggleTaskStatus,
  clearTasks,
  exportTasks,
};

export default taskManager;
