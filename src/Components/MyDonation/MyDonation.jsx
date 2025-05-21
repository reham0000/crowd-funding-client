import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { key } from "localforage";

const MyDonation = () => {

    const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);

  const singleUser = data.filter((d) => d?.email == user?.email);

  useEffect(() => {
    fetch("https://crowd-funding-server-kx73.vercel.app/donation", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

    return (
        <>
        <div>
          <h1 className="text-5xl font-semibold text-center pt-5">
            Your Donation
          </h1>
        </div>
  
        <div className="grid lg:grid-cols-3 text-center p-10 md:grid-cols-2 grid-cols-1 ">
        {singleUser?.map((d) =>  ( 
          <div key={d._id} className="card card-compact mx-auto mb-5 bg-base-100 items-center w-96 shadow-xl">
            <figure>
              <img src={d?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{d?.title}</h2>
              <p><span className="font-semibold">Deadline:</span> {d?.deadline}</p>
              
            </div>
          </div>
        ))}
        </div>
      </>
    );
};

export default MyDonation;