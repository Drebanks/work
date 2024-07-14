import Image from "next/image";
import Link from "next/link";
import CircleLoader from "@/assets/images/circle-loader.svg";


const Button = ({
  isLink,
  text,
  onClick,
  to,
  className,
  loading,
  disabled,
  buttonType,
}) => {
  return isLink ? (
    <Link to={to} className={`link`}>
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${className} relative ${`button`} ${
        buttonType ? "secondary" : ""
      }`}
      disabled={disabled || false}
    >
      {loading ? (
        <Image src={CircleLoader} alt="" className="center-absolute" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
