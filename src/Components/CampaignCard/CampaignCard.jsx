import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const CampaignCard = () => {
  const funds = useLoaderData();
 

  return (
    <>
      <h1 className="mt-10 text-5xl text-center mb-10">
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
