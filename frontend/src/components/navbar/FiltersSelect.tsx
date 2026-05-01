import { Select } from "@components/ui/Select";
import "./Filters.css";
import type { FilterOption } from "@/types/FilterOption.types";
import { useRef } from "react";

interface Props {
  filterOptions: FilterOption[];
}

export const FiltersSelect: React.FC<Props> = ({ filterOptions }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleFiltersOnChange = (): void => {
    if (!selectRef.current) {
      return;
    }
    const query = selectRef.current.value.trim();
    handleSearch(query);
  };

  const handleSearch = (query: string): void => {
    if (!query) {
      console.warn("No search query provided.");
      return;
    }

    console.log("Searching for:", query);
  };

  return <Select name="filter" id="filter" options={filterOptions} ref={selectRef} onChange={handleFiltersOnChange} />;
};
