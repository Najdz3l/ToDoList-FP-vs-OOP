import type { ComponentPropsWithoutRef } from "react";
import "./Select.css";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  options: Option[];
}

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <select {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
