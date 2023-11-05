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
        element:<AddFood></AddFood>
      },
      {
        path:'/ManageMyFoods',
        element:<ManageMyFoods></ManageMyFoods>
      },
      {
        path:'/MyFoodRequest',
        element:<MyFoodRequest></MyFoodRequest>
      },
 ]
 },
 {
  path:'/login',
  element:<Login></Login>
 },
 {
  path:'/signUp',
  element:<SignUp></SignUp>
 },
]);

export default router;