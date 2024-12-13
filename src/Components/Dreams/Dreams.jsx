import { Link } from "react-router-dom";

const Dreams = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Empower Your Dreams with Crowd Funding
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Join a community of innovators, creators, and changemakers. Raise
          funds, connect with backers, and bring your ideas to life.
        </p>
      </div>

      <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="flex justify-center items-center h-16 w-16 mx-auto bg-blue-100 text-blue-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">
            Simple Fundraising
          </h3>
          <p className="mt-2 text-gray-600">
            Set up your campaign in minutes and start raising funds
            effortlessly.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="flex justify-center items-center h-16 w-16 mx-auto bg-green-100 text-green-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75L12 15.75l3.75 3v-13.5"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">
            Reach Global Backers
          </h3>
          <p className="mt-2 text-gray-600">
            Share your story and connect with supporters worldwide.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="flex justify-center items-center h-16 w-16 mx-auto bg-yellow-100 text-yellow-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 9.75l-4.5 4.5-4.5-4.5"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">
            Secure Transactions
          </h3>
          <p className="mt-2 text-gray-600">
            Backed by secure payment processing to ensure peace of mind.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/allcampaign">
          <button className="bg-[#2ec4b6] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Start Your Campaign
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Dreams;
