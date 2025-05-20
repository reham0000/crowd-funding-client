import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaTwitter, 
  FaYoutube, 
  FaFacebook, 
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHeart,
  FaRegCopyright
} from "react-icons/fa";
import { 
  FiMail,
  FiPhone,
  FiMapPin
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const socialLinks = [
    { icon: <FaYoutube size={20} />, url: "https://www.youtube.com/@almobinreham4654", name: "YouTube" },
    { icon: <FaFacebook size={20} />, url: "https://www.facebook.com/al.mobin.reham.2025", name: "Facebook" },
    { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/almobin_reham/", name: "Instagram" },
  ];

  const quickLinks = [
    { name: "About us", url: "about" },
    { name: "Contact", url: "#" },
    { name: "Campaign", url: "/mycampaign" },
    { name: "Donation", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" }
  ];

  const contactInfo = [
    { icon: <FiMail />, text: "support@crowdcube.com" },
    { icon: <FiPhone />, text: "+8801904617354" },
    { icon: <FiMapPin />, text: "Mohammad Pur-Dhaka, Bangladesh" }
  ];

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-white text-gray-800 border-t border-green-100"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-green-600 flex items-center">
              <span className="bg-green-100 p-2 rounded-lg mr-2">🌱</span>
              Crowdcube
            </h3>
            <p className="text-gray-600">
              Empowering communities through collective action and sustainable funding solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.url}
                  aria-label={link.name}
                  className="bg-green-50 hover:bg-green-100 text-green-600 p-2 rounded-full transition-colors duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-green-800">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.url.startsWith("/") ? (
                    <Link 
                      to={link.url}
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.url}
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-green-800">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-gray-600"
                >
                  <span className="text-green-500 mt-1">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-green-800">Newsletter</h3>
            <p className="text-gray-600">
              Thank You for visiting our website. Your donation is very helpful for us.
            </p>
            <form className="flex flex-col space-y-3">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Type your message here"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="my-8 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"
        />

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-center text-gray-500 text-sm"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <FaRegCopyright className="mr-1" />
            <span>{currentYear} Crowdcube. All rights reserved.</span>
          </div>
          <div className="flex items-center">
            <span>Made with</span>
            <FaHeart className="mx-1 text-red-500" />
            <span>for a better world</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;