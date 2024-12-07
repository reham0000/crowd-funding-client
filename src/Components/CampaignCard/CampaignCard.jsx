import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";


const CampaignCard = () => {
  const funds = useLoaderData();
    
  return (
    <>
      <h1 className="text-5xl font-semibold lg:w-[500px] mt-10 mb-10 bg-[#2ec4b6] mx-auto p-3 text-center rounded-2xl">
        Running Campaign: {funds.length}
      </h1>

      
      <div className="grid md:grid-cols-2 mb-10 grid-cols-1 lg:grid-cols-3 ">
        {funds.map((fund) => (
          <Card key={fund._id} fund={fund}></Card>
        ))}
      </div>
      
    </>
  );
};

export default CampaignCard;
