import About from "../About/About";
import Banner from "../Banner/Banner";
import CampaignCard from "../CampaignCard/CampaignCard";
import Dreams from "../Dreams/Dreams";
import Footer from "../Footer/Footer";
import Idea from "../Idea/Idea";
import Payment from "../Payment/Payment";
import Dark from "../Theme/Dark";

const Home = () => {
  return (
    <div>
        {/* <Dark></Dark> */}
      <Banner></Banner>
      <Payment></Payment>
      <CampaignCard></CampaignCard>
      <About></About>
      <Dreams></Dreams>
      <Idea></Idea>
      <Footer></Footer>
    </div>
  );
};

export default Home;
