import { useLoaderData } from "react-router-dom";
import AllCard from "../AllCard/AllCard";


const AllCampaign = () => {

    const funds = useLoaderData();
    // console.log(data);

    return (
        <>
            <h1 className="text-5xl font-semibold w-96 mt-10 mb-10 bg-[#2ec4b6] mx-auto p-3 text-center rounded-2xl">All Campaign:{funds.length}</h1>

            <div className="grid md:grid-cols-2 mb-10 grid-cols-1 lg:grid-cols-3 ">
        {funds.map((fund) => (
          <AllCard key={fund._id} fund={fund}></AllCard>
        ))}
      </div>
        </>
    );
};

export default AllCampaign;