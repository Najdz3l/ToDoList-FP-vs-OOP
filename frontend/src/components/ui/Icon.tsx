interface IconProps {
  svg: string;
  altText: string;
}

export const Icon = ({ svg, altText }: IconProps) => {
  return <img src={svg} alt={altText} />;
};
