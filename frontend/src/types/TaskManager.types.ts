export type TaskStatus = "Active" | "Completed";

export type Task = {
  taskId: string;
  date: string;
  title: string;
  status: TaskStatus;
};

export interface NewTaskPayload {
  title: string;
  date: string;
}

export type TaskManagerExportFormat = "json" | "csv" | "txt";

export type TaskManagerExportResult = {
  content: string;
  mime: string;
  filename: string;
};

// ToDo: Use this
export type TaskManager = {
  subscribe: (cb: (tasks: Task[]) => void) => () => void;
  getTasks: () => Task[];
  addTask: (payload: NewTaskPayload) => Task;
  deleteTask: (taskId: string) => void;
  updateTask: (taskId: string, patch: Partial<Task>) => void;
  toggleTaskStatus: (taskId: string) => void;
  clearTasks: () => void;
  exportTasks: (format: TaskManagerExportFormat) => TaskManagerExportResult;
};
