interface Props {
  svg: string;
  altText: string;
}

export const Icon: React.FC<Props> = ({ svg, altText }) => {
  return <img src={svg} alt={altText} />;
};
