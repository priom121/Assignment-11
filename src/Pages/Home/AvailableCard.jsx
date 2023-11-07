import { Link } from "react-router-dom";

const AvailableCard = ({availables}) => {
 const {_id,foodName,foodImage,donatorName,donatorImage,foodQuantity,location,expiredDate} = availables
return (
<div className="card w-96 h-96 bg-base-100 shadow-xl shadow-[#353535]">
  <figure className="px-10 pt-10">
    <img  src={foodImage} alt="Shoes" className="rounded-xl w-full h-72" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Food Name : {foodName}</h2>
    <p>Donator : {donatorName}</p>
    <div className="flex gap-5 justify-between">
    <img className="rounded-3xl w-20 h-14" src={donatorImage} alt="" />
    <p className="items-center mt-5">Expired date : {expiredDate}</p>
    </div>
    <div className="flex gap-5 justify-between">
      <p className="text-base font-medium">Quantity : {foodQuantity} </p>                        
      <p className="text-base font-medium">Location : {location} </p>                        
    </div>
    <Link to={`/availableOneCard/${_id}`}>
    <div className="card-actions ">
      <button className="btn btn-warning w-full shadow-lg shadow-[#353535]">View Details</button>
    </div>
    </Link>
  </div>
</div>
);
};

export default AvailableCard;