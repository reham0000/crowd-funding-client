import About from "../About/About";
import Banner from "../Banner/Banner";
import CampaignCard from "../CampaignCard/CampaignCard";
import Payment from "../Payment/Payment";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Payment></Payment>
            <CampaignCard></CampaignCard>
            <About></About>
        </div>
    );
};

export default Home;