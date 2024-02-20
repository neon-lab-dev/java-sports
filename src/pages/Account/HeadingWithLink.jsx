import { Link } from "react-router-dom";

const HeadingWithLink = ({
  heading,
  button: { label, link },
  className = "",
}) => {
  return (
    <div
      className={`flex gap-8 text-base sm:text-base 2xl:text-lg ${className}`}
    >
      <span className="font-Lato font-600">{heading}</span>
      <Link to={link} className="font-Lato font-600 text-blue">
        {label}
      </Link>
    </div>
  );
};

export default HeadingWithLink;
