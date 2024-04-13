import { Link } from "react-router-dom";

const HeadingWithLink = ({ heading, button = undefined, className = "" }) => {
  return (
    <div
      className={`flex gap-8 text-base sm:text-base 2xl:text-lg ${className}`}
    >
      <span className="font-Lato font-600">{heading}</span>
      {button ? (
        <Link to={button.link} className="font-Lato font-600 text-blue">
          {button.label}
        </Link>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default HeadingWithLink;
