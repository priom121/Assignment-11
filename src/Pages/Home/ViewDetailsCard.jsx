

const ViewDetailsCard = ({data}) => {
  const {name,image,quantity, location, date,notes} =data
return (
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{quantity}</p>
    <p>{location}</p>
    <p>{date}</p>
    <div className="card-actions justify-end">
      <p>{notes}</p>
    </div>
  </div>
</div>
);
};

export default ViewDetailsCard;