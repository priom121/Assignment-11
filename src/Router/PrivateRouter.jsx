import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Provider/Hooks/UseAuth";


const PrivateRouter = ({children}) => {
   const {user,loading} =UseAuth()
   const location = useLocation()
   console.log(location.pathname); 
   if(loading){
      return <span className="loading loading-spinner text-secondary"></span>
   }
   if(user){
     return children
   }                          
 return <Navigate state={location.pathname} to='/login'>Login</Navigate>
};

export default PrivateRouter;