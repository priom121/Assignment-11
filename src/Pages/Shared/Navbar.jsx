import { NavLink } from "react-router-dom";
import logo from '../../../public/logo food.png'
import UseAuth from "../../Provider/Hooks/UseAuth";

const Navbar = () => {
  
  const {user,logOut} =UseAuth()

  const handleLogOut =()=>{
    logOut()
  }
 const navLinks = <>
<ul className="lg:flex  items-center gap-5 text-lg font-medium">
  <li>
 <NavLink
to="/"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
 Home
</NavLink>
 </li>                    
 <li>
 <NavLink
to="/AvailableFoods"
 className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
AvailableFoods
</NavLink>
 </li>

 <li>
                                 
 <NavLink
to="/AddFood"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
AddFood
</NavLink>
 </li>
 <li>
                                 
 <NavLink
to="/ManageMyFoods"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
ManageMyFoods
</NavLink>
 </li>
 <li>
                                 
 <NavLink
to="/MyFoodRequest"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
MyFoodRequest
</NavLink>
 </li>
                           
 {/* <li>
 <NavLink
to="/login"
 className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "text-red-600" : ""
 }
>
Login
 </NavLink>
 </li> */}
</ul>
 </> 
return (
<div>
<div className=" navbar  bg-gradient-to-r from-green-300 to-blue-300 text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content
       mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
<div>
<a className="flex gap-3 items-center md:text-2xl ">
     <img className=" w-[60px] h-[50px] md:w-[70px] md:h-[60px] rounded-3xl" src={logo }></img>
<span className="text-blue-500 font-bold">Food Forward</span></a>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
   <ul>
  <li>
{
  user ? <button onClick={handleLogOut} className="btn btn-error" >Logout</button> 
   :<NavLink
   to="/login"
    className={({ isActive, isPending }) =>
     isPending ? "pending" : isActive ? "text-red-600" : ""
    }
   >
   <div className="text-xl font-semibold">Login</div>
    </NavLink>
}
 </li>
 </ul>
  </div>
</div>                                                                                         
 </div>
 );
};

export default Navbar;