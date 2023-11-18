import clsx from "clsx";

type ButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  form?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  text,
  onClick,
  disabled,
  className,
  form,
  type,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      form={form}
      type={type ? type : "button"}
      className={clsx(
        "px-4 py-2 bg-sky-600 text-neutral-950 hover:bg-sky-500 hover:disabled:bg-sky-600 disabled:opacity-30  rounded-sm",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
