import "./Table.css";
import { Row } from "./Row";
import { useState } from "react";

type Task = {
  date: string;
  title: string;
  status: string;
  taskId: number;
};

const generateUniqueId = (existingIds: Set<number>) => {
  let id = Date.now();
  while (existingIds.has(id)) id += 1;
  return id;
};

export const Table = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const seed = [
      { date: "2004-12-18", title: "Najdz3l", status: "Active" },
      { date: "2006-04-10", title: "Sachiko7552", status: "Completed" },
    ];

    const ids = new Set<number>();
    return seed.map((item) => {
      const id = generateUniqueId(ids);
      ids.add(id);
      return { ...item, taskId: id } as Task;
    });
  });

  const handleDeleteTask = (taskId: number) => {
    setTasks((prev) => prev.filter((t) => t.taskId !== taskId));
  };

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>DUE DATE</th>
            <th>Icon</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Row
              key={task.taskId}
              date={task.date}
              title={task.title}
              status={task.status}
              taskId={task.taskId}
              onDelete={handleDeleteTask}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
