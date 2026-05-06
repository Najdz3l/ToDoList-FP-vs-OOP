import "./Table.css";
import { Row } from "./Row";
import { HARDCODED_TASKS } from "@/data/tasks";
import type { Task } from "@/types/TaskManager.types";

export const Table = () => {
  const tasks: Task[] = HARDCODED_TASKS;

  return (
    <main>
      <table>
        <col width="130px"></col>
        <col width="100%"></col>
        <col width="130px"></col>
        <col width="420px"></col>
        <thead>
          <tr>
            <th>Due Date</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: Task) => (
            <Row key={task.taskId} task={task} />
          ))}
        </tbody>
      </table>
    </main>
  );
};
