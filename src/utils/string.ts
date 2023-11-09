export const convertPrice = (price?: number) => {
  if (price) {
    const arr = [];
    const priceSTR = price.toString();
    for (let index = priceSTR.length; index > 0; index -= 3) {
      index - 3 > 0
        ? arr.push(priceSTR.slice(index - 3, index))
        : arr.push(priceSTR.slice(0, index));
    }
    arr.reverse();
    return arr.join('.');
  }
  return '0';
};
