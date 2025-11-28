const maskCep = (cep) => {
  const digits = cep.replace(/\D/g, "");
  const maskedCep = digits.replace(/(\d{5})(\d{3})/, "$1-$2");
  return maskedCep;
};

export default maskCep;
