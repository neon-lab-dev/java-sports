const getSizeDetailsSIzeAndSide = (sizes, size, side) => {
  if (!side) {
    return sizes.find((s) => s.size === size);
  } else {
    return sizes.find((s) => s.size === size && s.side === side) ?? {};
  }
};
export default getSizeDetailsSIzeAndSide;
