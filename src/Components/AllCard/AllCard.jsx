import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fade, Bounce } from 'react-awesome-reveal';

const AllCard = ({ fund }) => {
    const { title, description, _id, thumbnail, minDonation } = fund;

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
                duration: 0.3
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm mx-auto mb-10"
        >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100">
                {/* Image with animation */}
                <motion.figure 
                    className="px-8 pt-8 overflow-hidden"
                    variants={imageVariants}
                >
                    <Fade triggerOnce>
                        <img 
                            src={thumbnail} 
                            alt={title} 
                            className="rounded-xl w-full h-48 object-cover"
                        />
                    </Fade>
                </motion.figure>

                {/* Card content */}
                <div className="p-6 flex-grow flex flex-col">
                    <Bounce triggerOnce delay={100}>
                        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
                            {title}
                        </h2>
                    </Bounce>

                    <Fade triggerOnce delay={200}>
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                            {description}
                        </p>
                    </Fade>

                    <Fade triggerOnce delay={300}>
                        <p className="text-gray-700 mb-5">
                            <span className="font-semibold">Amount:</span> {minDonation}৳
                        </p>
                    </Fade>

                    <div className="mt-auto">
                        <Bounce triggerOnce delay={400}>
                            <Link to={`/details/${_id}`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 shadow-md"
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

export default AllCard;