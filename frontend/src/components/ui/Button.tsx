import type { ComponentPropsWithoutRef } from "react";
import "./Button.css";

interface Props extends ComponentPropsWithoutRef<"button"> {}

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="button" type="button" {...props}>
      {children}
    </button>
  );
};
