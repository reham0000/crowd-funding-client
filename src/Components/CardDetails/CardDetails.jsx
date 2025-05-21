import { useContext, useState } from "react";
import { Bounce, Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CardDetails = () => {
  const data = useLoaderData();
console.log(data);
  const { user } = useContext(AuthContext);
 
  const [deadline, setDeadline] = useState(new Date(data.deadline));

  const currentDate = new Date(new Date().toDateString());
  // console.log(currentDate);

  const handleDonate = () => {
    const newDonation = {
      email: user?.email,
      title: data.title,
      name: data.name,
      deadline: data.deadline,
      amount: data.minDonation,
      image: data.thumbnail,
    };

    fetch("https://crowd-funding-server-kappa.vercel.app/donation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newDonation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <Slide>
        <h1 className="text-5xl text-center font-semibold mt-5 bg-[#2ec4b6] p-3 w-96 mx-auto rounded-3xl">
          Card Details
        </h1>
      </Slide>
      <Bounce>
        <div className="mt-5 text-center mb-5 font-semibold text-xl">
          <h1 className="text-center text-3xl font-semibold">
            Title: {data.title}
          </h1>
          <h1 className="mt-5">Name: {data.name}</h1>
          <img
            className="w-96 mx-auto mt-5 rounded-3xl"
            src={data.thumbnail}
            alt=""
          />
          <h1 className="w-96 mx-auto mt-5">Description: {data?.description}</h1>
          <h1 className="mt-5">DeadLine: {data?.deadline}</h1>
          <h1>Email: {data?.email}</h1>
          <h1>Amount: {data?.minDonation}</h1>

          <Link to='/onlinePayment'>
            <button
              onClick={handleDonate}
              disabled={currentDate >= deadline}
              className="btn mt-5 bg-[#2ec4b6]"
            >
              Donate
            </button>
          </Link>
        </div>
      </Bounce>
    </>
  );
};

export default CardDetails;
