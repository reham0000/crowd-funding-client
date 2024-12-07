import nagad from "../../assets/nagad.png";
import rocket from "../../assets/rocket.png";
import dbbl from "../../assets/DBBL-logo.jpg";
import bkash from "../../assets/bkash.png";
import Marquee from "react-fast-marquee";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Payment = () => {

    const [text] = useTypewriter({
        words: ['Online Payment', 'Bkash', 'Nagad', 'Rocket', 'DBBL'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

  return (
    <>
      <h1
        className=" mt-5 text-center text-5xl font-semibold bg-[#2ec4b6] text-white mx-auto lg:w-[600px] p-3 rounded-xl"
        data-aos="fade-up-right"
      >
        {/* Online Payment */}  <span className="text-white">{text}</span> <Cursor></Cursor>
      </h1>
      <Marquee pauseOnHover={true} speed={200}>
        <div className="mt-10 lg:w-36 lg:h-36 w-16 h-16 gap-16 flex justify-start items-center">
          <img src={bkash} alt="" />
          <img src={nagad} alt="" />
          <img src={rocket} alt="" />
          <img src={dbbl} alt="" />
        </div>
      </Marquee>
    </>
  );
};

export default Payment;
