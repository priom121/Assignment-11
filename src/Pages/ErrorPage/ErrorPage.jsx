import error from '../../assets/404page.jpg'

const ErrorPage = () => {
 return (
 <div className='max-w-screen-xl mx-auto' >
     <img className='border object-cover h-[500px] mt-28 justify-center items-center' src={error}alt="" />                                                                                     
  </div>
);
};

export default ErrorPage;