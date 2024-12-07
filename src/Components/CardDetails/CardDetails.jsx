import { Bounce, Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();
  return (
    <>
      <Slide>
      <h1 className="text-5xl text-center font-semibold mt-5 bg-[#2ec4b6] p-3 w-96 mx-auto rounded-3xl">Card Details</h1>
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
        <h1 className="w-96 mx-auto mt-5">Description: {data.description}</h1>
        <h1 className="mt-5">DeadLine: {data.deadline}</h1>
        <h1>Email: {data.email}</h1>
        <h1>minDonation: {data.minDonation}</h1>
        <h1>Type: {data.type}</h1>
        <Link>
            <button className="btn mt-5 bg-[#2ec4b6]">Donate</button>
        </Link>
      </div>
     </Bounce>
    </>
  );
};

export default CardDetails;
