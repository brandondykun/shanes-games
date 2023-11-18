import Link from "next/link";

type LinkButtonProps = {
  text: string;
  href: string;
};

const LinkButton = ({ text, href }: LinkButtonProps) => {
  return (
    <Link href={href} className="w-fit inline-block">
      <div className="p-6 bg-sky-500 text-neutral-950 hover:bg-sky-400 w-fit">
        {text}
      </div>
    </Link>
  );
};

export default LinkButton;
