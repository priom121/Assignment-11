import { useEffect, useState } from "react";
import ManageFoodCard from "./ManageFoodCard";
// import ManageFoodCard from "./ManageFoodCard";

const ManageMyFoods = () => {
    const [request ,setRequest] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/request')
        .then(res=>res.json())
        .then(data=>setRequest(data))
    },[])
return (
 <div>
   
    <div className="max-w-screen-xl mx-auto ">
       {request.map(requests=>
       <ManageFoodCard key={requests._id} requests={requests}></ManageFoodCard>)} 
        </div>                                                                                     
 </div>
 );
};

export default ManageMyFoods;