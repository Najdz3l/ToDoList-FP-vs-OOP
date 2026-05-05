import "./Navbar.css";
import { Filters } from "@components/navbar/Filters";
import { Export } from "@components/navbar/Export";
import type { FilterOption } from "@/types/FilterOption.types";
import { AddTask } from "@components/navbar/AddTask";
import { ClearTasks } from "@components/navbar/ClearTasks";
import { useTaskManager } from "@/hooks/useTaskManager";

export const Navbar = () => {
  const filterOptions: FilterOption[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  const { addTask, clearTasks } = useTaskManager();

  return (
    <nav>
      <AddTask addTask={addTask} />
      <ClearTasks clearTasks={clearTasks} />

      <Filters filterOptions={filterOptions} />
      <Export />
    </nav>
  );
};
