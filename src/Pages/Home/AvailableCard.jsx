
const AvailableCard = ({availables}) => {
 const {foodName,foodImage,donatorName,donatorImage,foodQuantity,location,expiredDate,additionalNotes} = availables
return (
<div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={foodImage} alt="Shoes" className="rounded-xl w-full h-52" />
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
    <div className="card-actions ">
      <button className="btn btn-warning w-full">View Details</button>
    </div>
  </div>
</div>
);
};

export default AvailableCard;