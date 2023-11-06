import Swal from "sweetalert2";

const AddFood = () => {

  const handleAdd =(e)=>{
    e.preventDefault()
    const form = e.target
    const photo = form.photo.value;
    const name = form.name.value;
    const Quantity = form.Quantity.value;
    const Location= form.Location.value;
    const Date =form.Date.value;
    const additional  =form.additional.value;
    const user ={photo ,name,Quantity,Location,Date,additional };
    // const details = {photo ,name,brand,type,price,description,rating}
    Swal.fire({
      icon: 'success',
      title: 'Done ',
      text: 'successfully added foods',
    })
    console.log(user);
  }
return (
  <div className="bg-blue-200 rounded-xl py-10 mt-5 mb-5 max-w-screen-xl mx-auto">
  <form onSubmit={handleAdd} >
  <label className="ml-10 ">
    <span className=" text-2xl mt-4 font-medium">Add Food </span>
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
       <span className="label-text text-base">Name</span>
       <label className="input-group">
      <input type="text" placeholder="Food Name" name=" name" className="input input-bordered w-full" />
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
     <button className="btn btn-info ">Add Food</button>
     </div>
       </div>



  </form>   
</div>
);
};

export default AddFood;