import type { Payload, Task } from "@/types/TaskManager.types";
import { generateUniqueId } from "@utils/generateUniqueId";

export class TaskManager {
  // Tablica przechowująca zadania
  private tasks: Task[] = [];
  // Zbiór funkcji obserwujących zmiany w zadaniach
  private subs = new Set<(tasks: Task[]) => void>();

  constructor(initial: Task[] = []) {
    this.tasks = [...initial]; // Kopia początkowych zadań, jeśli istnieją
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
  addTask(payload: Payload): Task {
    const task = { ...payload, taskId: generateUniqueId() };
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
}
