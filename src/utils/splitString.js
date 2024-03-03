export const splitString = (string, separator = ",") => {
  if (typeof string === "number") return [string.toString()];
  return string
    .split(separator)
    .filter((item) => item)
    .map((item) => item.trim());
};
