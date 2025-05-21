import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fade, Bounce } from "react-awesome-reveal";

const Card = ({ fund }) => {
  const { title, description, _id, thumbnail, minDonation } = fund;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      className="w-full sm:w-80 md:w-96 lg:w-80 xl:w-96 mx-auto mb-10"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Image with hover animation */}
        <motion.div variants={imageVariants} className="overflow-hidden">
          <Fade triggerOnce fraction={0.1}>
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-48 md:h-56 object-cover"
            />
          </Fade>
        </motion.div>

        {/* Card Content */}
        <div className="p-6 flex-grow flex flex-col">
          <Bounce triggerOnce delay={300} fraction={0.1}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 line-clamp-1">
              {title}
            </h2>
          </Bounce>

          <Fade triggerOnce delay={400} fraction={0.1}>
            <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
              {description}
            </p>
          </Fade>

          <div className="mb-5">
            <Fade triggerOnce delay={500} fraction={0.1}>
              <p className="text-primary font-semibold">
                Minimum Donation: <span className="text-accent">{minDonation}৳</span>
              </p>
            </Fade>
          </div>

          <div className="mt-auto">
            <Bounce triggerOnce delay={600} fraction={0.1}>
              <Link to={`/details/${_id}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  See More
                </motion.button>
              </Link>
            </Bounce>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;