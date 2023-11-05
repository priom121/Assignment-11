import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animation from '../../Animation - 1699074418421 (1).json'
import UseAuth from "../../Provider/Hooks/UseAuth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const SignUp = () => {

  const {createUser} = UseAuth()

  const handleSignUp =(e)=>{
    e.preventDefault()
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const photo = form.get('photo')
    console.log(name,email,password,photo);

    const profile = currentUser =>{
      updateProfile(currentUser,{
      displayName:name ,photoURL:photo
      })
      .then(()=>{})
      .catch(error=>{
       console.log(error.message);
      })
     } 
    // validation part ---------
    if(password.length < 6){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'password must be at least 6 characters!',
      })
      return;
    }
    else if(!/[A-Z]/.test(password)){
      Swal.fire({
        icon: 'error',
        title: 'oopss ',
        text: 'password must be one capital letter',
      })
      return;
    }
    else if(!/[@#$%&?]/.test(password)){
      Swal.fire({
        icon: 'error',
        title: 'oopss ',
        text: 'password must be a special characters',
      })
      return;
    }

   
    createUser(email,password)
    .then(result=>{
      const user =result.user
      console.log(user);
      Swal.fire({
        icon: 'success',
        title: 'Done ',
        text: 'your register have  successfully',
      })
      return;
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    })
  }



return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-6">
    {/* <img src={img} alt="" /> */}
    <Lottie animationData={animation}></Lottie>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm 
    bg-gradient-to-r from-blue-400 to-green-300 text-white">
      <form onSubmit={handleSignUp} className="card-body">
      <h1 className="text-2xl font-bold">Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="Name" placeholder="Name" name='Name' className="input text-black input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input text-black input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input text-black input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Photo</span>
          </label>
          <input type="photo" placeholder="photo url" name='photo' className="input text-black input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
      
              
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign up</button>
        </div>
        <p className='text-center'>Already Have An Account? <Link
         className='text-blue-500' to='/login'>
        Login
        </Link></p>
      </form>
    </div>
  </div>
</div>
 );
};

export default SignUp;