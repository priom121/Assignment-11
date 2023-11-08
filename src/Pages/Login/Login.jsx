import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../login.animation.json'
import UseAuth from "../../Provider/Hooks/UseAuth";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
const {signIn,googleLogIn } =UseAuth()
 
const handleGoogle =()=>{
  googleLogIn()
  .then(res=>{
    console.log(res.user);
  })
  navigate(location?.state ? location?.state : '/')
}

const handleLogin =(e)=>{
  e.preventDefault()
  console.log(e.currentTarget);
  const form = new FormData (e.currentTarget)
  const email = form.get('email')
 const password = form.get('password')
 console.log(email,password);

    signIn(email, password)
    .then(result=>{
      const user =result.user;
      console.log(user);
      Swal.fire({
        icon: 'success',
        title: 'Done ',
        text: 'successfully login',
      })
      // location
      navigate(location?.state ? location?.state : '/')
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    })
 
}

return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-6">
   <Lottie animationData={login}></Lottie>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl 
    bg-gradient-to-r from-blue-500 to-red-500 text-white">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-2xl font-bold">Login!</h1>
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='text-center'>New to Food Sharing ?  
        <Link className='text-blue-600 font-medium' to='/signUp'>
        Sign Up
        </Link></p>
      </form>
      <div className="py-4 text-center">
       <p className="text-center text-lg text-cyan-400">or connect with</p>
       <button onClick={handleGoogle}className="btn-sm rounded-lg  btn-warning">Google login</button>
      </div>
    </div>
  </div>
</div>
);
};

export default Login;