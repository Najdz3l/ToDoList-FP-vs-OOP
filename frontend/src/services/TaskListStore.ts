import type { Task } from "@/types/TaskManager.types";

let tasks: Task[] = [];

/**
 * @summary Zwraca kopię listy zadań.
 * @description Zapobiega niezamierzonym mutacjom danych z zewnątrz.
 * @returns Kopia listy.
 */
export const getTasks = (): Task[] => {
  return [...tasks];
};

/**
 * @summary Ustawia nową listę w magazynie.
 * @description Pusta lista czyści magazyn, inaczej lista jest kopiowana.
 * @param newTaskList - Nowa lista.
 * @returns void
 */
export const setTasks = (newTaskList: Task[]): void => {
  if (newTaskList.length === 0) {
    tasks = [];
    return;
  }
  tasks = [...newTaskList];
};

/**
 * @summary Inicjalizuje magazyn.
 * @param - Początkowa lista.
 * @returns void
 */
export const initTaskStore = (initial: Task[] = []) => {
  tasks = [...initial];
};

/**
 * @summary Obiekt magazynu zadań.
 */
const taskListStore = { getTasks, setTasks, initTaskStore };
export default taskListStore;
