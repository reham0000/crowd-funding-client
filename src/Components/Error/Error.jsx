import React from "react";
import sad from "../../assets/icons8-sad-face-50.png";

const Error = () => {
  return (
    <div>
      <div>
        <img className="w-24 mx-auto mt-24" src={sad} alt="" />
        <h1 className="text-5xl text-center mt-10">404 <br /> Page Not Found</h1>
        <p className="text-center font-semibold mt-10 text-2xl">The Page You Are Looking For Doesn't Exist</p>
      </div>
    </div>
  );
};

export default Error;