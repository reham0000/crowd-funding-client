import About from "../About/About";
import Banner from "../Banner/Banner";
import CampaignCard from "../CampaignCard/CampaignCard";
import Footer from "../Footer/Footer";
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
      <Footer></Footer>
    </div>
  );
};

export default Home;
