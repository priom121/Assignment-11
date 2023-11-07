import { Link } from "react-router-dom";

const FoodCard = ({foods}) => {
 const { _id,name,image,quantity, location, date} =foods;

return (
<div className="card card-compact  w-96 h-96 bg-slate-200 shadow-xl shadow-[#353535]">
  <figure><img className="object-cover w-full h-60" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <p className="text-base font-semibold">quantity : {quantity}</p>
    <div className="flex justify-between">
       <p className="text-base font-semibold">Location : {location}</p>                       
       <p className="text-base font-semibold">Date : {date}</p>                       
    </div>
   
    <div className="card-actions  justify-center ">
      <Link to={`/viewDetails/${_id}`}><button  className="btn w-full btn-info">View details</button></Link>
    </div>
  </div>

</div>
);
};

export default FoodCard;