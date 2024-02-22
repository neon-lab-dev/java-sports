import { Link } from "react-router-dom";

function AppCTAButton({ text, link }) {
  return (
    <Link
      to={link}
      className="uppercase text-neutral-black bg-neutral-white px-4 py-2 lg:py-3 lg:px-6 text-xs sm:text-base text-Lato font-700"
    >
      {text}
    </Link>
  );
}

export default AppCTAButton;
