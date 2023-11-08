import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/Home/AvailableFoods";
import AddFood from "../Pages/Home/AddFood";
import ManageMyFoods from "../Pages/Home/ManageMyFoods";
import MyFoodRequest from "../Pages/Home/MyFoodRequest";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import ViewDetails from "../Pages/Home/ViewDetails";
import AvailableOneCard from "../Pages/Home/AvailableOneCard";
import UpdatedFood from "../Pages/Home/UpdatedFood";
import ManageSIngleFood from "../Pages/Home/ManageSIngleFood";


const router = createBrowserRouter([
 {
  path: "/",
 element: <MainLayOut></MainLayOut>,
 errorElement:<ErrorPage></ErrorPage>,
 children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/AvailableFoods',
        element:<AvailableFoods></AvailableFoods>
      },
      {
        path:'/AddFood',
        element:<PrivateRouter><AddFood></AddFood></PrivateRouter>
      },
      {
        path:'/ManageMyFoods',
        element:<PrivateRouter><ManageMyFoods></ManageMyFoods></PrivateRouter>
      },
      {
        path:'/MyFoodRequest',
        element:<PrivateRouter><MyFoodRequest></MyFoodRequest></PrivateRouter>
      },
      {
        path:'/login',
        element:<Login></Login>
       },
       {
        path:'/signUp',
        element:<SignUp></SignUp>
       },
       {
        path:'/viewDetails/:id',
        element:<ViewDetails></ViewDetails>,
        loader:({params})=>fetch(`https://food-forward-server.vercel.app/food/${params.id}`)
       },
       {
        path:'/availableOneCard/:id',
        element:<AvailableOneCard></AvailableOneCard>,
        loader:({params})=>fetch(`https://food-forward-server.vercel.app/available/${params.id}`)
       },
     {
      path:'/updatedFood/:id',
      element:<UpdatedFood></UpdatedFood>,
      loader:({params})=>fetch(`https://food-forward-server.vercel.app/request/${params.id}`)
     },
     {
      path:'/manageSingleFood/:id',
      element:<ManageSIngleFood></ManageSIngleFood>,
      loader:({params}) =>fetch(`https://food-forward-server.vercel.app/${params.id}`)
     }

 ]
 },
]);

export default router;