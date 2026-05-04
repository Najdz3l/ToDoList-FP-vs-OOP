import "./Table.css";
import { Row } from "./Row";
import { useTaskManager } from "@/hooks/useTaskManager";
import type { Task } from "@/types/TaskManager.types";

export const Table = () => {
  const { tasks, deleteTask, updateTask, toggleTaskStatus } = useTaskManager();

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Due Date</th>
            <th>Icon</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: Task) => (
            <Row
              key={task.taskId}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
              toggleStatus={toggleTaskStatus}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
