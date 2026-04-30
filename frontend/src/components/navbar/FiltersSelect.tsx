import { Select } from "@components/ui/Select";
import "./Filters.css";
import type { FilterOption } from "@/types/FilterOption";
import { useRef } from "react";

export const FiltersSelect = ({ filterOptions }: { filterOptions: FilterOption[] }) => {
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
