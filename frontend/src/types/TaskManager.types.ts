export type Task = {
  taskId: string;
  date: string;
  title: string;
  status: string;
};

export type Payload = Omit<Task, "taskId">;
