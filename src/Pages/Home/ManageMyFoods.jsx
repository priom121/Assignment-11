import { useEffect, useState } from "react";
import ManageFoodCard from "./ManageFoodCard";
import Swal from "sweetalert2";
// import ManageFoodCard from "./ManageFoodCard";

const ManageMyFoods = () => {
    const [request ,setRequest] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/request')
        .then(res=>res.json())
        .then(data=>setRequest(data))
    },[])

    const handleDelete =(id)=>{
        Swal.fire({
        title: "Are you sure?",
       text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       fetch(`http://localhost:5000/request/${id}`,{
      method:'DELETE'
       })
        .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.deletedCount > 0){
        Swal.fire({
      title: "Deleted!",
       text: "Your Food has been deleted.",
        icon: "success"
        });
        }
        const remaing = request.filter(requests=>requests._id !==id)
        setRequest(remaing)
        })
        }
      }) 
      }

    //   const handleUpdate =(id)=>{
    //   fetch(`http://localhost:5000/request/${id}`,{
    //     method:'PATCH',
    //     headers:{
    //         'content-type':'application/json'
    //     },
    //     body:JSON.stringify({status:'confirm'})
    //   })
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log(data)
    //     if(data.modifiedCount > 0){
    //         // updaed
    //         const remaing = request.filter(requests=>requests._id !==id);
    //         const updated =request.find(requests=>requests._id !==id)
    //         updated.status ='confirm'
    //         const newRequest =[updated , ...remaing]
    //         setRequest(newRequest)
    //     }
    //   })
    //   }


return (
 <div >
<table className="table mx-auto">
<thead >
      <tr >
        <th>photo</th>
        <th>Quantity</th>
        <th>Location</th>
        <th>Date</th>
      </tr>
    </thead>
</table>
    <div className="max-w-screen-xl mx-auto ">
       {request.map(requests=>
       <ManageFoodCard key={requests._id} requests={requests} 
       handleDelete={handleDelete} ></ManageFoodCard>)} 
        </div>                                                                                     
 </div>
 );
};

export default ManageMyFoods;