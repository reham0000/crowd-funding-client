import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdBrowserUpdated } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyCampaign = () => {
  
  const myFunds = useLoaderData();

  const { user } = useContext(AuthContext);
 

  

  const singleUser = myFunds.filter((d) => d?.email == user?.email);
  const [donation, setDonation] = useState(singleUser);
  

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       

        fetch (`https://crowd-funding-server-kx73.vercel.app/myfunds/${id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          
          if(data.deletedCount) {
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
            const remainingDonation = donation.filter(d => d._id !== id);
            setDonation(remainingDonation)
          }
        })
        
      }
      
    });
  }

  return (
    <>
      <div>
        <h1 className="text-5xl font-semibold text-center pt-5">My Campaign</h1>
      </div>

      <div  className="overflow-x-auto p-10">
        <table className="table table-zebra mt-10 ">
         
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
              <th>Title</th>
              <th>Amount</th>
              
              <th>Deadline</th>
              <th>Update</th>
              <th>Delete</th>

            </tr>
          </thead>

          {donation.map((single,idx) => (
            <tbody key={single._id}>
            
              <tr>
                <th>{idx+1}</th>
                <td>{single.name}</td>
                <td>{single.title}</td>
                <td>{single.minDonation}</td>
                <td>{single.deadline}</td>
                <td>  <Link to={`/update/${single._id}`} className="text-2xl cursor-pointer"><MdBrowserUpdated></MdBrowserUpdated></Link></td>
                <td onClick={() => handleDelete (single._id)} className="text-2xl cursor-pointer"><MdAutoDelete></MdAutoDelete></td>
                
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default MyCampaign;
