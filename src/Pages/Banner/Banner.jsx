
import banner from '../../assets/banner11.jpg'
import banners from '../../assets/banner2.jpg'
const Banner = () => {
return (
<div className="hero  bg-base-200">
<div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img src={banner} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={banners} className="w-1/2 absolute right-5 top-1/2 
     rounded-lg shadow-2xl" />
    </div>
    <div className='lg:w-1/2'>
    <h1 className="text-2xl md:text-5xl font-bold text-blue-500"> Food Sharing and Surplus</h1>
      <p className="py-6 ">Our food aid programme is designed to provide <br/>essential food items to the most vulnerable members of society, including <br/> children, the elderly, and those living in extreme poverty. With your <br/>help, we can provide these individuals wit</p>
      <button className="btn btn-info">Get More Info</button>
    </div>
  </div>
</div>
 );
};

export default Banner;