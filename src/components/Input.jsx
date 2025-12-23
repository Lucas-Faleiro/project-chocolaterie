import { cva } from "cva";

const inputVariants = cva({
  base: "border-2 rounded px-4 py-2 focus:outline-none shadow-md",
  variants: {
    colors: {
      primary: "border-input-border focus:border-input-border-focus",
      secondary: "border-gray-400 focus:border-input-border-focus",
    },
    width: {
      full: "w-full",
      half: "w-1/2",
      third: "w-1/3",
    },
  },
  defaultVariants: {
    colors: "primary",
    width: "full",
  },
});

function Input({ colors, className, width, ...props }) {
  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={inputVariants({ colors, className, width })}
        id={props.id}
      />
      {props.children}
      <div className="text-red-500 text-sm font-[roboto] ml-2">
        {props.errorMessage}
      </div>
    </>
  );
}

export default Input;
