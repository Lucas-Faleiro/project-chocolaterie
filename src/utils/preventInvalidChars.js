const preventInvalidChars = (e) => {
  const invalidChars = ["-", "+", "e", "E", "."];
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
};
export default preventInvalidChars;
