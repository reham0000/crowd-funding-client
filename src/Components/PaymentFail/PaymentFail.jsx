import { motion } from "framer-motion";
import { FaTimesCircle, FaExclamationTriangle, FaRedo, FaHome, FaCreditCard, FaHeadset } from "react-icons/fa";
import { MdPayment, MdOutlineErrorOutline } from "react-icons/md";

const PaymentFail = () => {
    
     const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const shakeVariants = {
        shake: {
            x: [0, -10, 10, -10, 10, 0],
            transition: {
                duration: 0.6
            }
        },
        initial: { x: 0 }
    }

    return (
           <motion.div
            className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-md mx-auto">
                <motion.div
                    className="text-center"
                    variants={itemVariants}
                >
                    <motion.div
                        className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-100 mb-6"
                        variants={shakeVariants}
                        animate="shake"
                    >
                        <FaTimesCircle className="h-16 w-16 text-red-600" />
                    </motion.div>

                    <motion.h1
                        className="text-4xl font-extrabold text-gray-900 mb-2"
                        variants={itemVariants}
                    >
                        Donation Failed
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 font-semibold mb-8"
                        variants={itemVariants}
                    >
                        We couldn't process your donation
                    </motion.p>
                </motion.div>

                <motion.div
                    className="bg-white shadow-lg rounded-lg overflow-hidden mb-8"
                    variants={itemVariants}
                    transition={{ delay: 0.3 }}
                >
                    <div className="px-6 py-5 border-b border-gray-200 bg-red-50">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            <MdOutlineErrorOutline className="mr-2 text-red-600 text-xl" />
                            Error Details
                        </h3>
                    </div>
                    <div className="px-6 py-4">
                        <div className="flex items-start mb-4">
                            <FaExclamationTriangle className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                            <div>
                                <p className="font-medium">Donation declined</p>
                                <p className="text-sm text-gray-600">Your transaction was not completed successfully.</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Possible reasons:</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Insufficient funds
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Incorrect card details
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Bank declined transaction
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Technical issue
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                    variants={containerVariants}
                >
                    <motion.div
                        className="bg-white p-4 rounded-lg shadow flex items-start"
                        variants={itemVariants}
                        whileHover={{ y: -3 }}
                    >
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <FaCreditCard className="text-blue-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900">Try another card</h4>
                            <p className="text-sm text-gray-600">Use a different payment method</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white p-4 rounded-lg shadow flex items-start"
                        variants={itemVariants}
                        whileHover={{ y: -3 }}
                    >
                        <div className="bg-purple-100 p-3 rounded-full mr-4">
                            <FaHeadset className="text-purple-600 text-xl" />
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900">Contact support</h4>
                            <p className="text-sm text-gray-600">Get help with your payment</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                >
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 shadow-sm"
                        variants={itemVariants}
                    >
                        <FaRedo className="mr-2" />
                        <a href="/allcampaign">Try Again</a>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm"
                        variants={itemVariants}
                    >
                        <FaHome className="mr-2" />
                        <a href="/">Return Home</a>
                    </motion.button>
                </motion.div>

                <motion.div
                    className="mt-8 text-center text-sm text-gray-500"
                    variants={itemVariants}
                >
                    <p>Need immediate assistance? Call us at <span className="text-red-600">+8801904617354</span></p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PaymentFail;