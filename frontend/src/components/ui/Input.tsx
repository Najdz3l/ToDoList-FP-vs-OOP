import type { ComponentPropsWithoutRef } from "react";
import "./Input.css";
import type React from "react";

interface Props extends ComponentPropsWithoutRef<"input"> {
  ref?: React.Ref<HTMLInputElement>;
}

export const Input: React.FC<Props> = ({ ref, ...props }) => {
  return <input className="input" {...props} ref={ref ? ref : null} />;
};
