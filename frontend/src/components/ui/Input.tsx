import type { ComponentPropsWithoutRef } from "react";
import "./Input.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

export const Input = (props: InputProps) => {
  return <input className="input" {...props} />;
};
