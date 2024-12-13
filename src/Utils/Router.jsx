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
import SignUp from "../Components/SignUp/SignUp";
import SignIn from "../Components/SignIn/SignIn";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";
import Update from "../Components/Update/Update";


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
        loader: () => fetch("http://localhost:5000/funds"),
      },
      {
        path: "/newcampaign",
        element: (
          <PrivetRoute>
            <NewCampaign></NewCampaign>
          </PrivetRoute>
        ),
      },
      {
        path: "/mycampaign",
        element: (
          <PrivetRoute>
            <MyCampaign></MyCampaign>
          </PrivetRoute>
        ),
        loader: () => fetch("http://localhost:5000/myfunds"),
      },
      {
        path: "/mydonation",
        element: (
          <PrivetRoute>
            <MyDonation></MyDonation>
          </PrivetRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/fund/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/myfunds/${params.id}`)
      }
      
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
