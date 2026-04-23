import { ButtonSvg } from "../ui/ButtonSvg";
import { Select } from "../ui/Select";
import { Input } from "../ui/Input";
import "./TodoFilters.css";

export const TodoFilters = () => {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="todo-filters">
      <div className="search-group">
        <Input type="text" placeholder="Search tasks by title..." className="search-input" />
        <ButtonSvg svg="search" svgAltText="Search Button" />
      </div>
      <Select name="filter" id="filter" options={filterOptions} />
    </div>
  );
};
