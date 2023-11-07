import { useLoaderData } from "react-router-dom";





const ViewDetails = () => {
const foodDetails = useLoaderData()
const {name,image, quantity,location,date,notes} = foodDetails
return (
<div className="card max-w-screen-xl mx-auto  shadow-[#353535] 
lg:card-side bg-base-100 shadow-xl h-[50vh] items-center mt-12">
  <figure><img className="w-full h-full object-cover" src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title lg:text-4xl lg:font-semibold">Name : {name}</h2>
    <p className="lg:text-2xl"> quantity : {quantity}</p>
    <p className="lg:text-2xl font-bold"> Location : {location}</p>
    <p className="lg:text-2xl font-medium"> Date : {date}</p>
    <div className="card-actions justify-end">
      <p className="lg:text-2xl font-medium">{notes}</p>
    </div>
  </div>
</div>
);
};

export default ViewDetails;