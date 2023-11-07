import { Link, useLoaderData } from "react-router-dom";


const AvailableOneCard = () => {
     const availableFood = useLoaderData()
     const {_id, foodName,foodImage,donatorName,donerEmail,
       donatorImage,foodQuantity,location,expiredDate,additionalNotes} =availableFood 
       
  const handleForm =(e)=>{
   e.preventDefault();
   console.log(e.currentTarget);
  const form = new FormData (e.currentTarget)
  const donate = form.get('donate')
  const notes = form.get('notes')
  console.log(donate ,notes);
  } 

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
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-info" onClick={()=>document.getElementById('my_modal_5').showModal()}>Request</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <img className="w-full rounded-lg" src={foodImage} alt="" />
    <h2 className="card-title lg:text-4xl lg:font-semibold">Food Name : {foodName}</h2>
    <p className="font-medium">Food id : {_id}</p>
    <p className="py-4 font-medium">Expired Date : {expiredDate}</p>
   <div className="flex justify-between gap-10">
   <img className="w-40 rounded-xl h-20" src={donatorImage} alt="" />
    <p className="text-xl font-semibold items-center ">Donator Name : {donatorName}</p>
   </div>
   <p className="text-xl font-semibold items-center ">Donator Email : {donerEmail}</p>
   <p className=" text-lg font-medium"> Location : {location}</p>
 <form onSubmit={handleForm} >
 <input type="text" name="donate" placeholder="donate" className="bg-gray-200 p-2 rounded-lg" />
   <textarea placeholder="Additional Notes" name="notes"
    className="textarea mt-5 textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
 </form>
    <div className="modal-action ">
      <form method="dialog ">
        <Link to='/ManageMyFoods'>
        <button className="btn btn-info mr-3">Request</button>
        </Link>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-warning">Close</button>
      </form>
    </div>
  </div>
</dialog>
  </div>
</div>
);
};

export default AvailableOneCard;