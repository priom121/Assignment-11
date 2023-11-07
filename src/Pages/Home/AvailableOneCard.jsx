import { useLoaderData } from "react-router-dom";


const AvailableOneCard = () => {
     const availableFood = useLoaderData()
     const {foodName,foodImage,donatorName,donatorImage,foodQuantity,location,expiredDate,additionalNotes} =availableFood                       
return (
<div className="card max-w-screen-xl mx-auto  shadow-[#353535] 
lg:card-side bg-orange-300 shadow-xl h-[50vh] items-center mt-12">
  <figure><img className="w-full h-full object-cover" src={foodImage} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title lg:text-4xl lg:font-semibold">Name : {foodName}</h2>
    <p className="lg:text-2xl"> quantity : {foodQuantity}</p>
    <p className="lg:text-2xl font-bold"> Location : {location}</p>
    <p className="lg:text-2xl font-medium"> Date : {expiredDate}</p>
    <div className="flex justify-between items-center gap-10">
       <img className="w-20 h-14 rounded-2xl" src={donatorImage} alt="" />
       <p className="text-xl font-semibold">{donatorName}</p>
    </div>
    <div className="card-actions justify-end">
      <p className="lg:text-2xl font-medium">{additionalNotes}</p>
    </div>
  </div>
</div>
);
};

export default AvailableOneCard;