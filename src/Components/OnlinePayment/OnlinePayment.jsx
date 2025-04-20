import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const OnlinePayment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <h1 className="text-center mt-10 font-bold text-3xl">Payment</h1>
        
        <div className="pt-10 px-36">
        <h1 className="text-xl font-semibold mb-5">Bank Payment</h1>
          <CheckOutForm></CheckOutForm>
        </div>
      </Elements>
    </div>
  );
};

export default OnlinePayment;
