import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import { FaDonate, FaCalendarAlt, FaDollarSign, FaHeart } from "react-icons/fa";

const MyDonation = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const singleUser = data.filter((d) => d?.email === user?.email);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://crowd-funding-server-kx73.vercel.app/donation", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (singleUser.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center p-4"
      >
        <FaHeart className="text-6xl text-primary mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          No Donations Yet
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-md">
          You haven't made any donations yet. Start supporting causes you care about!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="min-h-screen py-10 px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={itemVariants}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <FaDonate className="text-4xl text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Donations
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you for your generous contributions to these important causes.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {singleUser?.map((d) => (
          <motion.div
            key={d._id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <figure className="relative h-48 overflow-hidden">
              <img
                src={d?.image}
                alt={d?.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-xl font-bold text-white">{d?.title}</h2>
              </div>
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <FaCalendarAlt className="text-primary" />
                <span>Deadline: {d?.deadline}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <FaDollarSign className="text-primary" />
                <span>Amount: ${d?.amount || 'Not specified'}</span>
              </div>
              <p className="text-gray-700 line-clamp-2">{d?.description}</p>
              
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MyDonation;