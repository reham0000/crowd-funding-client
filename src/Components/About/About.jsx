import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl">About Us</h2>
          <p className="mt-4 text-lg sm:text-xl">
            Transforming dreams into reality through the power of community
            crowdfunding.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="rounded-lg bg-white p-6 shadow-lg text-gray-800 hover:scale-105 transform transition duration-300">
          <Slide direction={'right'}>
            <h3 className="text-xl font-bold mb-2 text-purple-600">
              Our Mission
            </h3>
            <p className="text-sm">
              To provide a platform where innovative ideas find the resources
              they need to thrive and succeed.
            </p>
            </Slide>
          </div>
         
         
         <div className="rounded-lg bg-white p-6 shadow-lg text-gray-800 hover:scale-105 transform transition duration-300">
            <Slide>
            <h3 className="text-xl font-bold mb-2 text-purple-600">
              Our Vision
            </h3>
            <p className="text-sm">
              A world where creativity and passion are never limited by
              financial constraints.
            </p>
            </Slide>
          </div>
        
          <div className="rounded-lg bg-white p-6 shadow-lg text-gray-800 hover:scale-105 transform transition duration-300">
            <Slide direction="left">
            
            <h3 className="text-xl font-bold mb-2 text-purple-600">
              Why Choose Us?
            </h3>
            <p className="text-sm">
              We empower creators and backers alike, fostering transparency and
              trust within our community.
            </p>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
