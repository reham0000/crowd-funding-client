import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Error from "../Components/Error/Error";
import AllCampaign from "../Components/AllCampaign/AllCampaign";
import NewCampaign from "../Components/NewCampaign/NewCampaign";
import MyCampaign from "../Components/MyCampaign/MyCampaign";
import MyDonation from "../Components/MyDonation/MyDonation";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/allcampaign',
                element: <AllCampaign></AllCampaign>
            },
            {
                path: '/newcampaign',
                element: <NewCampaign></NewCampaign>
            },
            {
                path: '/mycampaign',
                element: <MyCampaign></MyCampaign>
            },
            {
                path: '/mydonation',
                element: <MyDonation></MyDonation>
            },
            {
                path: "*",
                element: <Error></Error>
              },
            
        ]
    },
    
])

export default router;