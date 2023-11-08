import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedFood = () => {
 const updated =useLoaderData()
 const { _id ,photo,Quantity,Location,Date} =updated

 const handleUpdated =(e)=>{
 e.preventDefault()
 const form = e.target
 const photo = form.photo.value;
  const Quantity = form.Quantity.value;
  const Location= form.Location.value;
 const Date =form.Date.value;
  const user ={photo ,Quantity,Location,Date};
  // const details = {photo ,name,brand,type,price,description,rating}
 fetch(`http://localhost:5000/request/${_id}`,{
  method:'PUT',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(user)
 })
.then(res=>res.json())
 .then(data=>{
  console.log(data);
     if(data.modifiedCount){
    Swal.fire({
      icon: 'success',
      title: 'success',
      text: ' updated succfssfully',
   })
 }
})
}


return (
 <div className="bg-cyan-200 rounded-xl py-10 mt-5 mb-5 max-w-screen-xl mx-auto">
<form onSubmit={handleUpdated} >
 <label className="ml-10 ">
  <span className=" text-2xl mt-4 font-medium">Updated Food </span>
     </label>
     <div className="">
     <div className="mx-auto w-1/2">
        <label className="label">
        <span className="label-text text-base">Photo</span>
        </label>
           <label className="input-group w-full">
             <input type="text" placeholder="Photo" name="photo" className="input input-bordered w-full " />
        </label>
             </div>
     <div className="w-1/2 mx-auto mt-5 ">
 <span className="label-text text-base">Quantity</span>
     <label className="input-group">
    <input type="text" placeholder="Quantity" name="Quantity" className="input input-bordered w-full" />
     </label>
     </div>
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">Location</span>
     <label className="input-group">
    {/* <select type="text" placeholder=" Pickup Location" name="Location" className="input input-bordered w-full" /> */}
    <select placeholder="Pickup Location" name="Location"
       className="w-full select select-bordered  ">
          <option selected>Bangladesh</option>
          <option>India</option>
          <option>China</option>
          <option>Swizerland</option>
          <option>japan</option>
          <option>USA</option>
</select>
      </label>
     </div>
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">Date</span>
     <label className="input-group">
    <input type="Date" placeholder=" Expired Date" name="Date" className="input input-bordered w-full" />
     </label>
     </div>
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base"> Additional Notes
                            </span>
     <label className="input-group">
    <input type="text" placeholder=" Additional Notes" name="additional" className="input input-bordered w-full" />
     </label>
     </div>
   <div className="text-center mt-5">
   <button className="btn btn-info ">Updated </button>
   </div>
     </div>
                            
                            
                            
</form>   
 </div>
 );
};

export default UpdatedFood;