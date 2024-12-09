import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";

const NewCampaign = () => {

    const handleAddFund = event => {
        event.preventDefault();

        const form = event.target;

        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;
        const name = form.name.value;
        const email = form.email.value;

        const newFund = {thumbnail, title, type, description, minDonation, deadline, name, email};

       

        fetch('http://localhost:5000/fund', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFund)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

  return (
    <>
      <Slide>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Add New Campaign
            </h2>
            <form onSubmit={handleAddFund} className="space-y-4">
              {/* Thumbnail */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  name="thumbnail"
                  //   value={formData.thumbnail}
                  //   onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter image URL"
                  required
                />
              </div>
              {/* Campaign Title */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Campaign Title
                </label>
                <input
                  type="text"
                  name="title"
                  //   value={formData.title}
                  //   onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter campaign title"
                  required
                />
              </div>
              {/* Campaign Type */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Campaign Type
                </label>
                <select
                  name="type"
                  //   value={formData.type}
                  //   onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="personal issue">Personal Issue</option>
                  <option value="startup">Startup</option>
                  <option value="business">Business</option>
                  <option value="creative ideas">Creative Ideas</option>
                </select>
              </div>
              {/* Description */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  //   value={formData.description}
                  //   onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter campaign description"
                  rows="4"
                  required
                ></textarea>
              </div>
              {/* Minimum Donation */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Minimum Donation Amount
                </label>
                <input
                  type="number"
                  name="minDonation"
                  //   value={formData.minDonation}
                  //   onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter minimum donation amount"
                  required
                />
              </div>
              {/* Deadline */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  //   value={formData.deadline}
                  //   onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              {/* User Email */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  User Email
                </label>
                <input
                  type="email"
                  name="email"
                  //   value={formData.email}
                  //   readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor"
                />
              </div>
              {/* User Name */}
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  //   value={formData.name}
                  //   readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor"
                />
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default NewCampaign;
