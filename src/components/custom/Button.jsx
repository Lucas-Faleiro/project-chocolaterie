import { cva } from "cva";

const buttonVariants = cva({
  base: "rounded font-bold px-4 py-2 cursor-pointer mx-2 font-roboto shadow-md",
  variants: {
    colors: {
      primary: "bg-pink-400 text-white hover:bg-pink-500",
      secondary: "bg-green-700 text-white hover:bg-green-800 hover:text-white",
    },
    size: {
      medium: "text-base py-2 px-4",
      large: "text-lg py-3 px-6",
    },
  },
  defaultVariants: {
    colors: "primary",
    size: "medium",
  },
});

export default function Button({ colors, size, className, ...props }) {
  return (
    <>
      <button
        className={buttonVariants({ colors, size, className })}
        {...props}
      >
        {props.children}
      </button>
    </>
  );
}
