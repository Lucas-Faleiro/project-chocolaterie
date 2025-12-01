function Input(props) {
  const baseStyle =
    "border-2 border-pink-200 rounded px-4 py-2 w-full focus:outline-none focus:border-pink-400 shadow-md";

  return (
    <div className={props.containerclass}>
      <label htmlFor={props.labelId}>{props.labelText}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={props.inputclass || baseStyle}
        id={props.labelId}
      />
      {props.children}
      <div className="text-red-500 text-sm font-[roboto] ml-2">
        {props.errorMessage}
      </div>
    </div>
  );
}

export default Input;
