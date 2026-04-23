import type { ComponentPropsWithoutRef } from "react";
import "./IconButton.css";

export const IconButton = ({ children, ...props }: ComponentPropsWithoutRef<"button">) => {
  return (
    <button className="icon-button" type="button" {...props}>
      {children}
    </button>
  );
};
