import "./Table.css";
import { Row } from "./Row";
import { useTaskManager } from "@/hooks/useTaskManager";
import { useTaskManagerContext } from "@/context/TaskManagerContext";
import type { Task } from "@/types/TaskManager.types";

export const Table = () => {
  const manager = useTaskManagerContext();
  const { tasks, deleteTask, updateTask, toggleTaskStatus } = useTaskManager(manager);

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
