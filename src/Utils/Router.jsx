import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Error from "../Components/Error/Error";
import AllCampaign from "../Components/AllCampaign/AllCampaign";
import NewCampaign from "../Components/NewCampaign/NewCampaign";
import MyCampaign from "../Components/MyCampaign/MyCampaign";
import MyDonation from "../Components/MyDonation/MyDonation";
import CardDetails from "../Components/CardDetails/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/fund"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allcampaign",
        element: <AllCampaign></AllCampaign>,
      },
      {
        path: "/newcampaign",
        element: <NewCampaign></NewCampaign>,
      },
      {
        path: "/mycampaign",
        element: <MyCampaign></MyCampaign>,
      },
      {
        path: "/mydonation",
        element: <MyDonation></MyDonation>,
      },
      {
        path: "/details/:id",
        element: <CardDetails></CardDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/fund/${params.id}`),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
