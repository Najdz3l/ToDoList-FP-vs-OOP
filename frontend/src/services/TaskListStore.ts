import type { Task } from "@/types/TaskManager.types";

let tasks: Task[] = [];

/**
 * @summary Zwraca aktualną listę zadań.
 * @description Zwraca kopię listy zadań, aby zapobiec niezamierzonym mutacjom z zewnątrz.
 * @params Brak
 * @returns {Task[]} Lista zadań.
 */
export const getTasks = (): Task[] => {
  return [...tasks];
};

/**
 * @summary Ustawia listę zadań.
 * @param newTaskList Nowa lista zadań.
 * @returns Nie zwraca niczego.
 */
export const setTasks = (newTaskList: Task[]): void => {
  if (newTaskList.length === 0) {
    tasks = [];
    return;
  }
  tasks = [...newTaskList];
};

/**
 * @summary Inicjalizuje store z opcjonalną listą zadań.
 * @param initial Początkowa lista zadań (domyślnie pusta).
 * @returns Nie zwraca niczego.
 */
export const initTaskStore = (initial: Task[] = []) => {
  tasks = [...initial];
};

const taskListStore = { getTasks, setTasks, initTaskStore };
export default taskListStore;
