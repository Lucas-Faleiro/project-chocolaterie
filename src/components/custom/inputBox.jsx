function InputBox({
  type = "text",
  placeholder = "",
  value,
  onChange,
  labelId,
  labelText,
  errorMessage,
}) {
  return (
    <>
      <label htmlFor={labelId}>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-2 border-pink-200 rounded-full px-4 py-2 w-full focus:outline-none focus:border-pink-400 shadow-md"
        id={labelId}
      />
      <div className="text-red-500 text-sm font-[roboto] ml-2">
        {errorMessage}
      </div>
    </>
  );
}

export default InputBox;
