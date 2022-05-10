// NUMBER FORMATTER
export const formatNumber = (num) => {
  let digits = Number(num);
  let value = digits.toLocaleString("en");
  return value;
};
