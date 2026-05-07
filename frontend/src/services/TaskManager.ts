import type { NewTaskPayload, Task, TaskManagerExportFormat, TaskManagerExportResult } from "@/types/TaskManager.types";
import { generateUniqueId } from "@utils/generateUniqueId";

export class TaskManager {
  private tasks: Task[] = [];
  private subs = new Set<(tasks: Task[]) => void>();

  constructor(initial: Task[] = []) {
    this.tasks = [...initial];
  }

  /**
   * @summary Subskrybuje się do zmian w menedżerze zadań, dodając callback do zbioru subskrybentów i natychmiast wywołując go z aktualną listą zadań. Zwraca funkcję odsubskrybowania, która usuwa callback ze zbioru subskrybentów.
   * @param callback Funkcja, która zostanie wywołana za każdym razem, gdy lista zadań ulegnie zmianie. Otrzyma aktualną listę zadań jako argument.
   * @returns Funkcja odsubskrybowania, która usuwa callback ze zbioru subskrybentów
   */
  subscribe(callback: (tasks: Task[]) => void): () => void {
    this.subs.add(callback);
    callback(this.getTasks());
    return () => {
      this.subs.delete(callback);
    };
  }

  /**
   * @summary Powiadamia wszystkich subskrybentów o zmianie listy zadań, wywołując ich callbacki z aktualną listą zadań
   * @returns void
   */
  private notify(): void {
    this.subs.forEach((callback) => callback(this.getTasks()));
  }

  /**
   * @summary Sortuje zadania po statusie i dacie.
   * @param tasks - Lista zadań do posortowania.
   * @returns Posortowana lista zadań.
   */
  private sortByStatusAndDate = (tasks: Task[]): Task[] => {
    return tasks.sort((a, b) => {
      if (a.status === b.status) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      return a.status === "Active" ? -1 : 1;
    });
  };

  /**
   * @summary Zwraca aktualną listę zadań
   * @returns Tablica zadań, gdzie każde zadanie zawiera taskId, title, date i status
   */
  getTasks(): Task[] {
    const sorted = this.sortByStatusAndDate(this.tasks);
    return [...sorted];
  }

  /**
   * @summary Dodaje nowe zadanie do menedżera zadań
   * @param payload Obiekt zawierający dane nowego zadania (title i date)
   * @returns Nowo dodane zadanie, w tym wygenerowany unikalny taskId i domyślny status "Active"
   */
  addTask(payload: NewTaskPayload): Task {
    const task: Task = { ...payload, taskId: generateUniqueId(), status: "Active" };
    this.tasks.push(task);
    this.notify();
    return task;
  }

  /**
   * @summary Usuwa zadanie z menedżera zadań
   * @param taskId Identyfikator zadania do usunięcia
   * @returns void
   */
  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((t) => t.taskId !== taskId);
    this.notify();
  }

  /**
   * @summary Aktualizuje zadanie w menedżerze zadań
   * @param taskId Identyfikator zadania do zaktualizowania
   * @param patch Obiekt z danymi do zaktualizowania
   * @returns void
   */
  updateTask(taskId: string, patch: Partial<Task>): void {
    this.tasks = this.tasks.map((t) => (t.taskId === taskId ? { ...t, ...patch } : t));
    this.notify();
  }

  /**
   * @summary Przełącza status zadania między "Active" a "Completed"
   * @param taskId Identyfikator zadania, którego status ma zostać przełączony
   * @returns void
   */
  toggleTaskStatus(taskId: string): void {
    this.tasks = this.tasks.map((t) =>
      t.taskId === taskId ? { ...t, status: t.status === "Active" ? "Completed" : "Active" } : t,
    );
    this.notify();
  }

  /**
   * @summary Usuwa wszystkie zadania z listy i powiadamia subskrybentów o zmianie
   * @return void
   */
  clearTasks(): void {
    this.tasks = [];
    this.notify();
  }

  /**
   * @summary Exportuje zadania w wybranym formacie (JSON, CSV, TXT)
   * @param format Format eksportu: "json", "csv" lub "txt"
   * @returns Obiekt z zawartością do eksportu, typem MIME i sugerowaną nazwą pliku
   */
  exportTasks(format: TaskManagerExportFormat): TaskManagerExportResult {
    const timestamp = new Date().toISOString().split("T")[0];
    const filenameBase = `tasks-${timestamp}`;

    /**
     * Przygotowanie danych do eksportu.
     * Wybieramy tylko potrzebne pola:
     * date: data zadania
     * title: tytuł zadania
     * status: status zadania (Active lub Completed)
     */
    const selected = this.tasks.map((t) => ({ date: t.date, title: t.title, status: t.status }));

    if (format === "json") {
      return {
        content: JSON.stringify(selected, null, 2),
        mime: "application/json",
        filename: `${filenameBase}.json`,
      };
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
      return {
        content: `${header}\n${rows}`,
        mime: "text/csv",
        filename: `${filenameBase}.csv`,
      };
    }

    // txt
    const txtHeader = "date | title | status";
    const txtBody = selected.map((r) => `${r.date} | ${r.title} | ${r.status}`).join("\n");
    return {
      content: `${txtHeader}\n${txtBody}`,
      mime: "text/plain",
      filename: `${filenameBase}.txt`,
    };
  }
}
