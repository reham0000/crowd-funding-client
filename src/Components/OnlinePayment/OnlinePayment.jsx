import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

import { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { AuthContext } from "../Provider/AuthProvider";

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const OnlinePayment = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const type = form.type.value;
    const description = form.description.value;
    const minDonation = form.minDonation.value;
    const name = form.name.value;
    const email = form.email.value;
    const id = form.id.value;

    const donationAmount = {
      type,
      description,
      minDonation,
      name,
      email,
      id,
    };
    // console.log(donationAmount);

  //   fetch("http://localhost:5000/order", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(donationAmount),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       window.location.replace(result.url);
  //       console.log(result);
  //     });
 fetch("https://crowd-funding-server-kx73.vercel.app/order", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(donationAmount),
})
.then(async (res) => {
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Server error");
  }
  return res.json();
})
.then((result) => {
  if (!result.url) {
    throw new Error("Payment gateway URL not received");
  }
  window.location.replace(result.url);
})
.catch((err) => {
  console.error("Fetch failed:", err.message);
  // ইউজারকে এরর মেসেজ দেখান
  alert(`Payment initialization failed: ${err.message}`);
  // অথবা আপনার UI-তে এরর মেসেজ ডিসপ্লে করুন
});

  };

  return (
    
      <Slide>
        <div className="min-h-screen  bg-gray-100 flex items-center justify-center px-4">
          <div className="bg-white  shadow-lg rounded-lg w-full max-w-lg p-8">
            <h1 className="text-3xl mb-8 font-bold text-center">Bkash</h1>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Product ID
                </label>
                <input
                  type="id"
                  name="id"
                  value={user?.uid}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor"
                />
              </div>

              {/* Campaign Type */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Donation Type
                </label>
                <select
                  name="type"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="cash">Cash</option>
                </select>
              </div>
              {/* Description */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter campaign description"
                  rows="4"
                  required
                ></textarea>
              </div>
              {/* Minimum Donation */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Donation Amount
                </label>
                <input
                  type="number"
                  name="minDonation"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter donation Amount"
                  required
                />
              </div>

              {/* User Email */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  User Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor"
                />
              </div>
              {/* User Name */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor"
                />
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#2ec4b6] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#92df96] transition duration-300"
                >
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </Slide>
    
  );
};

export default OnlinePayment;
