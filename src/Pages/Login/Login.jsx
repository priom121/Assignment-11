import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import login from '../../login.animation.json'
import UseAuth from "../../Provider/Hooks/UseAuth";
const Login = () => {
const {signIn } =UseAuth()
const handleLogin =(e)=>{
  e.preventDefault()
  const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result=>{
      const user =result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
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
    </div>
  </div>
</div>
);
};

export default Login;