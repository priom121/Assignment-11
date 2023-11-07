import { useEffect } from "react";
import { useState } from "react";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";


const FetaureFood = () => {

     const [food,setFood] =useState([]);
     useEffect(()=>{
           fetch('http://localhost:5000/food')
           .then(res=>res.json())
           .then(data=>setFood(data))
            // setFood(data)
     },[])
 return (
 <div>
      <h1 className="text-4xl font-semibold text-blue-500 text-center mt-5">
          Feature Foods</h1>
          <div className="bg-[#353535] w-[5%] h-[3px] mx-auto mt-2"></div>
    <div className="max-w-screen-xl py-20   mx-auto
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-10">
    {
      food.map(foods=><FoodCard key={foods._id} foods={foods}></FoodCard>)
      }
      <div className="">
     <Link to='/AvailableFoods'>
     <button className="btn md:ml-[200px] lg:ml-[420px] block w-full btn-warning">
        Show All</button> 
     </Link>
        </div>     
     </div> 
                                                                                  
 </div>
 );
};

export default FetaureFood;