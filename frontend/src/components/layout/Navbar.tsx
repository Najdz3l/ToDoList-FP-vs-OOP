import "./Navbar.css";
import { Filters } from "@components/navbar/Filters";
import { Export } from "@components/navbar/Export";
import type { FilterOption } from "@/types/FilterOption.types";
import { AddTask } from "@components/navbar/AddTask";
import { ClearTasks } from "@components/navbar/ClearTasks";

export const Navbar = () => {
  const filterOptions: FilterOption[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <nav>
      <div className="navbar-actions">
        <AddTask />
        <ClearTasks />
      </div>

      <div className="navbar-controls">
        <Filters filterOptions={filterOptions} />
        <Export />
      </div>
    </nav>
  );
};
