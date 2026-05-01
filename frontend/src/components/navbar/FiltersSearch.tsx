import { Input } from "@components/ui/Input";
import "./Filters.css";
import searchSvgUrl from "@assets/icons/search.svg";
import { Button } from "@components/ui/Button";
import { Icon } from "@components/ui/Icon";
import { useEffect, useRef } from "react";
import { useModalContext } from "@/context/ModalContext";

export const FiltersSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const keybinds: readonly string[] = ["enter", "/", "escape"];
  const { isAnyModalOpen } = useModalContext();
  const isModalOpenRef = useRef<boolean>(isAnyModalOpen);

  useEffect(() => {
    isModalOpenRef.current = isAnyModalOpen;
  }, [isAnyModalOpen]);

  const handleSearch = (query: string): void => {
    if (!query) {
      console.warn("No search query provided.");
      return;
    }

    console.log("Searching for:", query);
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (isModalOpenRef.current) return;

    const keyPressed = event.key.toLowerCase();

    if (!keybinds.includes(keyPressed)) {
      return;
    }

    // Search on Enter key
    if (event.key === "Enter") {
      if (!inputRef.current) return;

      if (event.target === inputRef.current) {
        event.preventDefault();
        handleSearchOnInput();
      }
    }
    // Focus on search input
    else if (event.key === "/") {
      if (!inputRef.current) return;

      // Allow '/' to be insert into searchInput
      if (event.target === inputRef.current) {
        return;
      }
      event.preventDefault();
      inputRef.current.focus();
    }
    // Leave search input
    else if (event.key === "Escape") {
      if (!inputRef.current) return;

      if (event.target === inputRef.current) {
        event.preventDefault();
        inputRef.current.blur();
      }
    }
  };

  useEffect(() => {
    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
