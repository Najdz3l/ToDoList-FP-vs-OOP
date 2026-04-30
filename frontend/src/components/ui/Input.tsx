import type { ComponentPropsWithoutRef } from "react";
import "./Input.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  ref?: React.Ref<HTMLInputElement>;
}

export const Input = ({ ref, ...props }: InputProps) => {
  return <input className="input" {...props} ref={ref ? ref : null} />;
};
