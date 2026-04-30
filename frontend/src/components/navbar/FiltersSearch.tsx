import { Input } from "@components/ui/Input";
import "./Filters.css";
import searchSvgUrl from "@assets/icons/search.svg";
import { Button } from "@components/ui/Button";
import { Icon } from "@components/ui/Icon";
import { useRef } from "react";

export const FiltersSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (query: string): void => {
    if (!query) {
      console.warn("No search query provided.");
      return;
    }

    console.log("Searching for:", query);
  };

  const handleSearchOnInput = (): void => {
    if (!inputRef.current) {
      return;
    }
    const query = inputRef.current.value.trim();
    handleSearch(query);
  };

  const handleSearchOnClick = (): void => {
    if (!inputRef.current) {
      return;
    }
    const query = inputRef.current.value.trim();
    handleSearch(query);
  };

  return (
    <div className="search-group">
      <Input
        type="text"
        id="search-input"
        className="search-input"
        name="search-input"
        placeholder="Search tasks by title..."
        alt="Search tasks by title..."
        onChange={handleSearchOnInput}
        ref={inputRef}
      />
      <Button onClick={handleSearchOnClick}>
        <Icon svg={searchSvgUrl} altText="Search Icon" />
      </Button>
    </div>
  );
};
