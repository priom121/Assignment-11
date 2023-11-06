import img1 from '../../../Images/food-1.jpg'
import img2 from '../../../Images/Food-2.jpg'
import img3 from '../../../Images/Food-3.jpg'
import img4 from '../../../Images/food-4.jpg'
import img5 from '../../../Images/food-5.jpg'
import img6 from '../../../Images/food-6.jpg'
import img7 from '../../../Images/food-7.jpg'
import img8 from '../../../Images/food-8.jpg'
import img9 from '../../../Images/food-9.jpg'
import img10 from '../../../Images/food-10.jpg'
import img11 from '../../../Images/food-11.jpg'
import img12 from '../../../Images/food-12.jpg'

const Gallery = () => {
return (

<div className="py-10 ">
    <h2 className="text-4xl font-semibold text-center text-blue-500">
        Our Gallery</h2>
        <div className="bg-[#353535] w-[5%] h-[3px] mx-auto mt-2"></div>
        <p className='text-xl  py-5 text-center '>Some food sharing image</p>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4 ">
        <div>
            <img className="rounded-lg w-full h-full" src={img1} alt=""/>
        </div>
        <div>
            <img className="rounded-lg w-full h-full" src={img2} alt=""/>
        </div>
        <div>
            <img className=" rounded-lg w-full h-full" src={img3} alt=""/>
        </div>
    </div>
    <div className="grid gap-4  ">
        <div>
            <img className=" rounded-lg w-full h-full" src={img4} alt=""/>
        </div>
        <div>
            <img className=" rounded-lg w-full h-full" src={img5} alt=""/>
        </div>
        <div>
            <img className=" rounded-lg w-full h-full" src={img6} alt=""/>
        </div>
    </div>
    <div className="grid gap-4 ">
        <div>
            <img className=" rounded-lg  w-full h-full" src={img7} alt=""/>
        </div>
        <div>
            <img className=" rounded-lg  w-full h-full" src={img8} alt=""/>
        </div>
        <div>
            <img className=" rounded-lg  w-full h-full" src={img9} alt=""/>
        </div>
    </div>
    <div className="grid gap-4  ">
        <div>
            <img className=" rounded-lg w-full h-full" src={img10} alt=""/>
        </div>
        <div>
            <img className=" rounded-lg w-full h-full" src={img11} alt=""/>
        </div>
        <div>
            <img className=" rounded-lg w-full h-full" src={img12} alt=""/>
        </div>
    </div>
</div>                            
</div>

 );
};

export default Gallery;