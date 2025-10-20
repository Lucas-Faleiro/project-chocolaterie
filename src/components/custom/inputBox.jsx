function InputBox({ type = "text", placeholder = "", value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border-2 border-pink-200 rounded-full px-4 py-2 w-full focus:outline-none focus:border-pink-400 shadow-md"
    />
  );
}

export default InputBox;
