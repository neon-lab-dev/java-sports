function AppCTAButton() {
  return (
    <button
      onClick={() => {
        window.scrollBy({
          top: window.innerHeight * 0.6,
          behavior: "smooth",
        });
      }}
      className="text-neutral-black flex items-center justify-center bg-neutral-white h-[16px] xs:h-auto w-[78px] xs:w-auto px-3 py-0.5 xl:py-2 sm:py-1 md:px-6  text-[10px] sm:text-base md:text-lg xl:text-xl text-Lato font-700 rounded-[3px] sm:rounded-md"
    >
      Get It Now
    </button>
  );
}

export default AppCTAButton;
