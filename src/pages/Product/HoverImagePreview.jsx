import { useRef, useEffect, useState } from "react";

const HoverImagePreview = ({ img, show, cursorPosition = { x: 0, y: 0 } }) => {
  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      setContainerDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute hidden lg:block top-0 right-4 w-full h-full max-h-[80vh] z-[999] bg-grey-light rounded-lg transition-all overflow-hidden ${
        show ? "scale-100" : "scale-0"
      }`}
    >
      <img
        src={img}
        alt="preview"
        className="w-full h-full object-contain absolute scale-[3]"
        style={{
          transition: "transform 0.5s ease-in-out",
          transformOrigin: "top left",
          top: `-${(cursorPosition.y / 100) * containerDimensions.height * 2}px`,
          left: `-${(cursorPosition.x / 100) * containerDimensions.width * 2}px`,
        }}
      />
    </div>
  );
};
export default HoverImagePreview;
