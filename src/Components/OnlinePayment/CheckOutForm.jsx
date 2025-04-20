import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
// import UseaxiosSecure from "../../Hooks/UseaxiosSecure";


const CheckOutForm = () => {

  // const axiosSecure = UseaxiosSecure();
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();


    // useEffect(() => {
    //   const cart = axiosSecure.get(`/myfunds/${}`)
    // }, [])

    // useEffect(() => {
    //   axiosSecure.post('/create-payment-intent')
    //   .then(res => {
    //     console.log(res.data.clientSecret);
    //   })
    // }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stripe || !elements){
        return;
    }

    const card = elements.getElement(CardElement);

    if(card === null) {
        return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if(error) {
      console.log('payment error', error);
      setError(error.message);
    }
    else{
      console.log('payment method', paymentMethod);
      setError('');
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckOutForm;
