import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const MyCampaign = () => {
  const myFunds = useLoaderData();

  const { user } = useContext(AuthContext);
  // console.log(myFunds);

  const singleUser = myFunds.filter((d) => d?.email == user?.email);
  console.log(singleUser);

  return (
    <>
      <div>
        <h1 className="text-5xl font-semibold text-center pt-5">My Campaign</h1>
      </div>

      {singleUser.map((single) => {
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>: </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>;
      })}
    </>
  );
};

export default MyCampaign;
