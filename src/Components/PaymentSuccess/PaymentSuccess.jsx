import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaReceipt, FaShoppingBag, FaRegSmileBeam, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdPayment, MdLocalShipping } from "react-icons/md";


const PaymentSuccess = () => {
    const { tranId } = useParams();

    // Animation variants
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
                duration: 0.5
            }
        }
    };

    const checkIconVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };
    return (
         <motion.div
            className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8"
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
                        className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6"
                        variants={checkIconVariants}
                    >
                        <FaCheckCircle className="h-16 w-16 text-green-600" />
                    </motion.div>

                    <motion.h1
                        className="text-4xl font-extrabold text-gray-900 mb-2"
                        variants={itemVariants}
                    >
                        Payment Successful!
                    </motion.h1>
                    <motion.p
                        className="text-lg font-semibold text-gray-600 mb-8"
                        variants={itemVariants}
                    >
                        Thank you for your purchase
                    </motion.p>
                </motion.div>

                <motion.div
                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                >
                    <div className="px-6 py-5 border-b border-gray-200 bg-green-50">
                        <h3 className="text-lg font-medium text-gray-900 flex items-center">
                            <FaReceipt className="mr-2 text-green-600" />
                            Order Summary
                        </h3>
                    </div>
                    <div className="px-6 py-4">
                        <div className="flex justify-between mb-3">
                            <span className="text-gray-600">Transaction ID:</span>
                            <span className="font-medium">{tranId}</span>
                        </div>
                        <div className="flex justify-between mb-3">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between mb-3">
                            <span className="text-gray-600">Status:</span>
                            <span className="font-medium text-green-600 flex items-center">
                                Completed <FaCheckCircle className="ml-1" />
                            </span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-8 grid grid-cols-3 gap-4"
                    variants={containerVariants}
                >
                    <motion.div
                        className="bg-white p-4 rounded-lg shadow text-center"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-2">
                            <FaShoppingBag className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Your Donation</p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-4 rounded-lg shadow text-center"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-2">
                            <MdPayment className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Payment</p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-4 rounded-lg shadow text-center"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                    >
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 mb-2">
                            <MdLocalShipping className="h-6 w-6" />
                        </div>
                        <p className="text-sm font-medium text-gray-700">Your Donation Item Shipping</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-8"
                    variants={itemVariants}
                >
                    <div className="rounded-md shadow">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                        >
                            <FaHome className="mr-2" />
                            <a href="/">Back to Home</a>
                        </motion.button>
                    </div>
                    <div className="mt-3 rounded-md shadow">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50"
                        >
                            <FaShoppingCart className="mr-2" />
                            <a href="/allcampaign">Want to more donate?</a>
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-8 text-center"
                    variants={itemVariants}
                >
                    <p className="text-gray-500 text-sm flex items-center justify-center">
                        <FaRegSmileBeam className="mr-1 text-yellow-500" />
                        Thank you for the donation!
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PaymentSuccess;