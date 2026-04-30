import type { ComponentPropsWithoutRef } from "react";
import "./Button.css";

export const Button = ({ children, ...props }: ComponentPropsWithoutRef<"button">) => {
  return (
    <button className="button" type="button" {...props}>
      {children}
    </button>
  );
};
