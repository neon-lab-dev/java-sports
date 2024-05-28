function AppCTAButton({ text, action }) {
  return (
    <button
      onClick={action}
      className="text-neutral-black bg-neutral-white px-4 py-2 lg:py-3 lg:px-6 text-xs sm:text-base text-Lato font-700 rounded-lg"
    >
      {text}
    </button>
  );
}

export default AppCTAButton;
