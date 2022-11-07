export const currencies = (price) => {
  return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
// this regex is taken from stack over flow. https://stackoverflow.com/questions/2254185/regular-expression-for-formatting-numbers-in-javascript

export const Currency = (price) => {
  try {
    if (typeof price === 'string' && !price.length) {
      price = '0.0';
      return price;
    }
    return price.replace(/\$\s?|(,*)/g, '');
  } catch (error) {
    console.error(error);
  }
};
