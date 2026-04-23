import type { ComponentPropsWithoutRef } from "react";
import "./Button.css";

interface ButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "children"> {
  buttonText: string;
  buttonAltText: string;
}

export const Button = ({ buttonText, buttonAltText, ...props }: ButtonProps) => {
  return (
    <button className="button" type="button" {...props}>
      {buttonText}
    </button>
  );
};
