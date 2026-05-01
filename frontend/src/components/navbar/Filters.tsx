import "./Filters.css";
import type { FilterOption } from "@/types/FilterOption.types";
import { FiltersSearch } from "./FiltersSearch";
import { FiltersSelect } from "./FiltersSelect";

interface Props {
  filterOptions: FilterOption[];
}

export const Filters: React.FC<Props> = ({ filterOptions }) => {
  return (
    <div className="filters">
      <FiltersSearch />
      <FiltersSelect filterOptions={filterOptions} />
    </div>
  );
};
