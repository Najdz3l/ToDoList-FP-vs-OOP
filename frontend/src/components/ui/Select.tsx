import type { ComponentPropsWithoutRef } from "react";
import "./Select.css";

interface Option {
  value: string;
  label: string;
}

interface Props extends ComponentPropsWithoutRef<"select"> {
  options: Option[];
  ref: React.Ref<HTMLSelectElement>;
  onChange: () => void;
}

export const Select = ({ options, ref, onChange, ...props }: Props) => {
  return (
    <select {...props} ref={ref} onChange={() => onChange()}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
