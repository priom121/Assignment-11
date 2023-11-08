import { useLoaderData } from "react-router-dom";


const ManageSIngleFood = () => {
 const manageFood = useLoaderData()
 console.log(manageFood);
 const {photo,Quantity,Location,Date} =manageFood
return (
<div className="card glass mt-10 max-w-screen-lg mx-auto ">
<figure><img className="w-full h-[50vh] object-cover" src={photo} alt="car!"/></figure>
 <div className="card-body">
 <h2 className="card-title"> Quantity  : {Quantity}</h2>
  <p>Location : {Location}</p>
  <p>Date : {Date}</p>
</div>
</div>
);
};

export default ManageSIngleFood;