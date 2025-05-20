import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { 
  FaHandHoldingHeart, 
  FaLeaf, 
  FaWater, 
  FaHeart, 
  FaUsers,
  FaClock,
  FaDonate,
  FaChartLine,
  FaShieldAlt,
  FaArrowRight
} from 'react-icons/fa';
import { GiWaterDrop, GiTreeGrowth } from 'react-icons/gi';
import { RiLightbulbFlashLine } from 'react-icons/ri';

const FloatingElements = () => {
  const elements = [
    { icon: <GiWaterDrop />, size: "text-xl", color: "text-green-100" },
    { icon: <FaLeaf />, size: "text-lg", color: "text-green-50" },
    { icon: <RiLightbulbFlashLine />, size: "text-md", color: "text-green-100" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(20)].map((_, i) => {
        const element = elements[Math.floor(Math.random() * elements.length)];
        return (
          <motion.div
            key={i}
            initial={{ 
              y: Math.random() * 100 - 50,
              x: Math.random() * 100 - 50,
              opacity: 0,
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, Math.random() * 90 - 45, 0],
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }
            }}
            className={`absolute ${element.color} ${element.size}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {element.icon}
          </motion.div>
        );
      })}
    </div>
  );
};

const AnimatedCard = ({ icon, title, description, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.15 }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-green-100 transition-all"
    >
      <div className="bg-green-100 p-3 rounded-lg inline-block mb-4 text-green-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ProgressCircle = ({ percentage }) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <motion.circle
          className="text-green-500"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, delay: 0.5 }}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{percentage}%</span>
        <span className="text-xs text-gray-500">Funded</span>
      </div>
    </div>
  );
};

const Idea = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "100% Secure Donations",
      description: "Your donation is protected with bank-level security"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Transparent Tracking",
      description: "See exactly how your funds are being used"
    },
    {
      icon: <GiTreeGrowth className="text-2xl" />,
      title: "Sustainable Impact",
      description: "Projects designed for long-term community benefit"
    }
  ];

  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <FloatingElements />
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div 
          variants={item}
          className="text-center mb-16"
        >
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center bg-green-100 text-green-600 rounded-full p-4 mb-6 shadow-sm"
          >
            <FaHandHoldingHeart className="text-3xl" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }}
            viewport={{ once: true }}
          >
            Transform Lives With Your Donation
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { duration: 0.6, delay: 0.3 }
            }}
            viewport={{ once: true }}
          >
            Join thousands of donors making a real difference in communities around the world.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Community helping each other"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-green-500/20" />
              
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <FaWater className="text-green-600 text-xl" />
                      </div>
                      <span className="text-green-600 font-medium">Water Project</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Clean Water for 500 Families</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <FaClock className="mr-1" /> <span className="mr-4">28 days left</span>
                      <FaUsers className="mr-1" /> <span>1,240 donors</span>
                    </div>
                  </div>
                  <ProgressCircle percentage={75} />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm font-medium text-gray-700">
                  <span>$37,500 raised</span>
                  <span className="text-green-600">Goal: $50,000</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-8 border border-green-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Donate With Us?</h3>
              <p className="text-gray-600 mb-6">
                Every donation makes a difference. Here's how we ensure your contribution creates maximum impact:
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-green-100 p-2 rounded-lg mr-4 text-green-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.button
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center group"
            >
              <a href="/allCampaign" className="text-lg mr-3">Donate Now</a>
              <motion.span
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {[
            {
              title: "Immediate Impact",
              description: "See how your donation helps within weeks",
              icon: <FaHeart className="text-3xl" />,
              color: "bg-pink-50 text-pink-600"
            },
            {
              title: "Community Focused",
              description: "Projects designed with local communities",
              icon: <FaUsers className="text-3xl" />,
              color: "bg-blue-50 text-blue-600"
            },
            {
              title: "Sustainable Solutions",
              description: "Long-term benefits, not just quick fixes",
              icon: <GiTreeGrowth className="text-3xl" />,
              color: "bg-green-50 text-green-600"
            }
          ].map((feature, index) => (
            <AnimatedCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Idea;