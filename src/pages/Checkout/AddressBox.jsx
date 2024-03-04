import { useSelector } from "react-redux";

const AddressBox = ({ selectedAddress, setSelectedAddress, i, address }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {user[address] && (
        <button
          onClick={() => setSelectedAddress(address)}
          className={`flex items-start justify-start text-start flex-col gap-1 border-2  py-2 px-8 rounded-lg  transition-colors ${selectedAddress === address ? "border-primary" : "hover:border-green-200 border-gray-100"}      
          `}
        >
          <span className="text-lg font-500">Address {i + 1}</span>
          <span>{user[address]?.landmark}</span>
          <span>{user[address]?.address}</span>
          <span>
            {user[address]?.state}, {user[address]?.city}
          </span>
          <span>{user[address]?.pin_code}</span>
        </button>
      )}
    </>
  );
};
export default AddressBox;
