import type { ComponentPropsWithoutRef } from "react";
import "./Button.css";

interface ButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "children"> {
  svg: string;
  svgAltText: string;
}

export const ButtonSvg = ({ svg, svgAltText, ...props }: ButtonProps) => {
  // Vite sposób na dynamiczne wczytywanie assetów z folderu src
  const iconUrl = new URL(`../../assets/icons/${svg}.svg`, import.meta.url).href;

  return (
    <button className="button" type="button" {...props}>
      <img src={iconUrl} alt={svgAltText} />
    </button>
  );
};
