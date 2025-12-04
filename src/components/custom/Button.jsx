import { cva } from "cva";

const buttonVariants = cva({
  base: ["rounded", "font-bold", "px-4", "py-2", "cursor-pointer", "mx-2"],
  variants: {
    intent: {
      primary: ["bg-pink-400", "text-white", "hover:bg-pink-500"],
      secondary: [
        "bg-theme-green",
        "text-pink-200",
        "hover:bg-pink-400",
        "hover:text-white",
      ],
    },
    size: {
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-3", "px-6"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function Button({ intent, size, className, ...props }) {
  return (
    <>
      <button
        className={buttonVariants({ intent, size, className })}
        {...props}
      >
        {props.children}
      </button>
    </>
  );
}
