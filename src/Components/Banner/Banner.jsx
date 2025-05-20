import { Bounce } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { 
  FaChevronLeft, 
  FaChevronRight,
  FaCircle,
  FaRegCircle
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

// Mock images - replace with your actual imports
const b1 = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const b2 = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80";
const b3 = "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const b4 = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const slides = [
  {
    id: "slide1",
    image: b1,
    title: "Support Green Initiatives",
    subtitle: "Join our eco-friendly campaigns today",
    cta: "Learn More"
  },
  {
    id: "slide2",
    image: b2,
    title: "Nature Conservation",
    subtitle: "Protect our planet for future generations",
    cta: "Get Involved"
  },
  {
    id: "slide3",
    image: b3,
    title: "Sustainable Future",
    subtitle: "Innovative solutions for a greener tomorrow",
    cta: "Discover"
  },
  {
    id: "slide4",
    image: b4,
    title: "Community Power",
    subtitle: "Together we can make a difference",
    cta: "Join Now"
  }
];

const Banner = () => {
  return (
    <div className="relative bg-white">
      <Bounce triggerOnce>
        <div className="carousel w-full h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden rounded-b-xl shadow-lg">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              id={slide.id}
              className="carousel-item relative w-full"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt={`Banner ${index + 1}`}
              />
              
              {/* Content Overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute z-20 text-white left-10 md:left-20 top-1/2 transform -translate-y-1/2 max-w-lg"
              >
                <motion.h2 
                  whileHover={{ scale: 1.02 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg"
                >
                  {slide.title}
                </motion.h2>
                <motion.p 
                  whileHover={{ scale: 1.01 }}
                  className="text-xl md:text-2xl mb-6 text-green-100 drop-shadow-md"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#059669",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300"
                >
                  {slide.cta} <FiArrowRight />
                </motion.button>
              </motion.div>
              
              {/* Navigation Arrows */}
              <div className="absolute z-20 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`#slide${index === 0 ? slides.length : index}`}
                  className="btn btn-circle bg-white/20 hover:bg-white/30 backdrop-blur-sm border-none text-white"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
                  className="btn btn-circle bg-white/20 hover:bg-white/30 backdrop-blur-sm border-none text-white"
                  aria-label="Next slide"
                >
                  <FaChevronRight size={20} />
                </motion.a>
              </div>
            </div>
          ))}
        </div>
      </Bounce>
      
      {/* Indicators */}
      <div className="absolute z-20 bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((slide, index) => (
          <motion.a
            key={slide.id}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href={`#${slide.id}`}
            className="text-white hover:text-green-300 transition-colors"
            aria-label={`Go to slide ${index + 1}`}
          >
            {window.location.hash === `#${slide.id}` ? (
              <FaCircle size={12} />
            ) : (
              <FaRegCircle size={12} />
            )}
          </motion.a>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
        className="absolute z-20 bottom-2 left-1/2 transform -translate-x-1/2 text-white hidden md:block"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Banner;