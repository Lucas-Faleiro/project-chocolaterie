import { cva } from "cva";

const buttonVariants = cva({
  base: "rounded font-bold px-4 py-2 cursor-pointer mx-2 font-roboto shadow-md",
  variants: {
    colors: {
      primary:
        "bg-buttons-bg text-buttons-text hover:bg-buttons-hover hover:text-buttons-hover-text",
      secondary:
        "bg-secondary-buttons-bg text-secondary-buttons-text hover:bg-secondary-buttons-hover hover:text-secondary-buttons-hover-text",
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
