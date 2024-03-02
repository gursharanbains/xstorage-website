import { BsArrowRight } from "react-icons/bs";

interface IArrowButtonProps {
  text: string;
  className?: string;
}

const ArrowButton = ({ text, className }: IArrowButtonProps) => {
  return (
    <button
      className={`${className} btn btn-quaternary flex-between gap-2 group whitespace-nowrap`}
    >
      {text}{" "}
      <BsArrowRight className="text-2xl text-accent-primary_hover group-hover:text-white transition duration-300" />{" "}
    </button>
  );
};

export default ArrowButton;
