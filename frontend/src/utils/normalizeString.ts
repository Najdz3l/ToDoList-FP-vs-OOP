export const normalizeString = (str: string): string => {
  const trimmedString: string = str.trim();
  if (!trimmedString && trimmedString.length <= 0) {
    console.warn(`str value: ${str}`);
    return "";
  }
  const lowercase: string = trimmedString.toLowerCase();
  const capitalizedFirstLetter: string | undefined = lowercase[0]?.toUpperCase();
  if (!capitalizedFirstLetter) {
    console.warn(`str value: ${str.toString()}`);
    return "";
  }
  const normalizedString: string = capitalizedFirstLetter + lowercase.slice(1, lowercase.length);
  return normalizedString;
};
