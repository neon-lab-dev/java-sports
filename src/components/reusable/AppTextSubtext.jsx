const TextSubtext = ({ text, subText = "" }) => {
  return (
    <span className="font-[600] text-lg sm:text-xl">
      {text}:{" "}
      {subText && (
        <span className="text-[#666666] font-400 text-base sm:text-lg">
          {subText}
        </span>
      )}
    </span>
  );
};
export default TextSubtext;
