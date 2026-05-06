import type { NewTaskPayload, Task, TaskManagerExportFormat, TaskManagerExportResult } from "@/types/TaskManager.types";
import { generateUniqueId } from "@utils/generateUniqueId";

export class TaskManager {
  private tasks: Task[] = [];
  private subs = new Set<(tasks: Task[]) => void>();

  constructor(initial: Task[] = []) {
    this.tasks = [...initial];
  }

  /*
   *Dodaje funkcję do zbioru subskrybentów
   *Natychmiast ją wywołuje z bieżącą listą zadań
   *Zwraca funkcję odsubskrybowania (cleanup)
   */
  subscribe(callback: (tasks: Task[]) => void): () => void {
    this.subs.add(callback);
    callback(this.getTasks());
    return () => {
      this.subs.delete(callback);
    };
  }

  // Powiadomienie obserwatorów o zmianie zadań
  private notify() {
    this.subs.forEach((callback) => callback(this.getTasks()));
  }

  // Zwraca kopię listy zadań
  getTasks() {
    return [...this.tasks];
  }

  /* Dodaj zadanie
   * payload: obiekt z danymi zadania bez taskId
   * Tworzy nowe zadanie, generując unikalny taskId
   * Dodaje nowe zadanie do tablicy zadań
   * Powiadamia subskrybentów o zmianie
   * Zwraca dodane zadanie, w tym wygenerowane taskId
   */
  addTask(payload: NewTaskPayload): Task {
    const task: Task = { ...payload, taskId: generateUniqueId(), status: "Active" };
    this.tasks.push(task);
    this.notify();
    return task;
  }

  /* Usuń zadanie
   * taskId: identyfikator zadania do usunięcia
   * Usuwa zadanie z tablicy na podstawie taskId
   * Powiadamia subskrybentów o zmianie
   */
  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((t) => t.taskId !== taskId);
    this.notify();
  }

  /* Zaktualizuj zadanie
   * taskId: identyfikator zadania do zaktualizowania
   * patch: obiekt z danymi do zaktualizowania
   * Aktualizuje zadanie, łącząc istniejące dane z nowymi danymi z patcha
   * Powiadamia subskrybentów o zmianie
   */
  updateTask(taskId: string, patch: Partial<Task>): void {
    this.tasks = this.tasks.map((t) => (t.taskId === taskId ? { ...t, ...patch } : t));
    this.notify();
  }

  /* Przełącz status zadania
   * taskId: identyfikator zadania do przełączenia statusu
   * Znajduje zadanie na podstawie taskId i przełącza jego status między "Active" a "Completed"
   * Powiadamia subskrybentów o zmianie
   */
  toggleTaskStatus(taskId: string): void {
    this.tasks = this.tasks.map((t) =>
      t.taskId === taskId ? { ...t, status: t.status === "Active" ? "Completed" : "Active" } : t,
    );
    this.notify();
  }

  clearTasks(): void {
    this.tasks = [];
    this.notify();
  }

  /**
   * Exportuje zadania w wybranym formacie (JSON, CSV, TXT)
   * @param format Format eksportu: "json", "csv" lub "txt"
   * @returns Obiekt z zawartością do eksportu, typem MIME i sugerowaną nazwą pliku
   */
  exportTasks(format: TaskManagerExportFormat): TaskManagerExportResult {
    const timestamp = new Date().toISOString().split("T")[0];
    const filenameBase = `tasks-${timestamp}`;

    // Przygotowanie danych do eksportu
    // Wybieramy tylko potrzebne pola
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
