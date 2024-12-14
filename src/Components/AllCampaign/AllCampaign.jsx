import { useLoaderData } from "react-router-dom";
import AllCard from "../AllCard/AllCard";
import { useState } from "react";

const AllCampaign = () => {
  const funds = useLoaderData();
  const [amount, setAmount] = useState([]);

  const sortByAmount = () => {
  
    const sortedData = funds?.sort((a, b) => Number(a.minDonation) - Number(b.minDonation));
    console.log(sortedData);
    setAmount(sortedData);
  };
  console.log(amount);

  return (
    <>
      <div className="flex justify-around">
        <h1 className="text-5xl  font-semibold  mt-10 mb-10 bg-[#2ec4b6] mx-auto p-4 text-center rounded-2xl">
          All Campaign:{funds.length}
        </h1>
        <p
          onClick={sortByAmount}
          className=" mt-10 cursor-pointer mb-10 bg-[#2ec4b6] text-xl font-semibold mx-auto p-4 text-center rounded-2xl"
        >
          Sort
        </p>
      </div>

      <div className="grid md:grid-cols-2 mb-10 grid-cols-1 lg:grid-cols-3 ">
        {funds? funds?.map((fund) => (
          <AllCard key={fund._id} fund={fund}></AllCard>
        )) : amount?.map((fund) => (
          <AllCard key={fund._id} fund={fund}></AllCard>
        ))} 
      </div>
    </>
  );
};

export default AllCampaign;
