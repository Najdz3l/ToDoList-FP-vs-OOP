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
