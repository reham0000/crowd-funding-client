import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AuthProvider, { AuthContext } from "../Provider/AuthProvider";

const MyCampaign = () => {
  // const loadedUsers = useLoaderData();
  // const [users, setUsers] = useState(loadedUsers);

  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);

  const singleUser =  data.filter(d => d?.email == user?.email )
  console.log(singleUser);
  

  useEffect(() => {
    fetch('http://localhost:5000/donation', {
      method: "GET",
      // headers: {
      //   "content-type": "application/json",
      // },
      // body: JSON.stringify(newDonation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
        setData(data)
      });
  }, []);

  

  return (
    <>
      <div>
        <h1 className="text-5xl font-semibold text-center pt-5">
          Your Donation
        </h1>
      </div>

      <div className="overflow-x-auto p-8">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Email</th>
              <th>Name</th>
              
              <th>Amount</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {singleUser?.map((d, idx) => (
              
                <tr key={d._id} >
                  <th>{idx + 1}</th>
                  <td>{d?.title}</td>
                  <td>{d?.email}</td>
                  <td>{d?.name}</td>
                  <td>{d.amount}</td>
                  <td>{d.deadline}</td>
                </tr>
              
            ))}

           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCampaign;
