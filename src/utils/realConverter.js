const realConverter = (value) => {
  const number = Number(value) || 0;
  const formatted = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
  return formatted.replace(/\s/g, "");
};

export default realConverter;
