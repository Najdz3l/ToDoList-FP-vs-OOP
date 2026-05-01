import type { TaskStatus } from "./TaskManager.types";

export interface EditFields {
  date: string;
  title: string;
  status: TaskStatus;
}
