import "./Filters.css";
import type { FilterOption } from "@/types/FilterOption";
import { FiltersSearch } from "./FiltersSearch";
import { FiltersSelect } from "./FiltersSelect";

export const Filters = ({ filterOptions }: { filterOptions: FilterOption[] }) => {
  return (
    <div className="filters">
      <FiltersSearch />
      <FiltersSelect filterOptions={filterOptions} />
    </div>
  );
};
