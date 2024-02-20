const Specifications = ({ product }) => {
  const { specification } = product;
  return (
    <div className="flex flex-col gap-2 max-w-4xl">
      <span className="font-500 text-lg sm:text-2xl">{specification.description}</span>
      <ul className="font-500 text-lg sm:text-xl">
        {specification.features.map((feature, index) => (
          <li key={index} className="mt-1 sm:mt-2">
            <span>{feature.title}</span>
            <ul className="list-disc list-inside font-400 ml-2 sm:ml-6 text-sm mt-1 sm:mt-2">
              {feature.features.map((f, index) => (
                <li className="text-base" key={index}>
                  {f}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Specifications;
