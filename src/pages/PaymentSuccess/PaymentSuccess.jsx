import { Link } from "react-router-dom";
import paymentSuccess from "../../assets/icons/payment-successfull.svg"

const PaymentSuccessPage= ({
}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <img src={paymentSuccess} alt="payment-success" className="size-[300px]" />
      <div className="text-center">
        <h1 className="font-Jakarta font-700 text-3xl text-green-500">
        Order Confirmed!!
        </h1>
        <p className=" text-gray-600 mt-1">Congratulations!! We have received your order.</p>
        <p className="text-gray-500">Thanks for purchasing! Your order will be processed, and we will reach out to you shortly.</p>
      </div>
      <Link
        to={"/"}
        className="bg-primary/2 px-4 py-2 text-white rounded-lg transition duration-300 w-fit mt-8"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;
