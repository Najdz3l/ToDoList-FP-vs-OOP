import type { ComponentPropsWithoutRef } from "react";
import "./Button.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="button" type="button" {...props}>
      {children}
    </button>
  );
};
