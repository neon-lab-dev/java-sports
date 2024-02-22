/**
 *
 * @param {string} param - The param to convert to a word
 */
export const paramToWord = (param) => {
  return param
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

export const wordToParam = (word) => {
  return word.toLowerCase().split(" ").join("-");
};
