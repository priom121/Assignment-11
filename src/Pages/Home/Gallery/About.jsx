import bgImage from '../../../Images/aboutus.jpg'

const About = () => {
return (
 <div className="bg-cover py-10" >
    <h3 className="text-4xl text-center font-medium">About Us</h3>
    <div className="w-[7%] h-[3px] mt-1 mx-auto bg-blue-500 "></div>
 <div style={{backgroundImage: `url(${bgImage})`}} 
 className="md:flex justify-center md:justify-between max-w-screen-xl mx-auto rounded-lg shadow-xl shadow-[#353535] py-10 mt-5">
  
 <div>
    <h2 className=" font-bold text-3xl text-red-500">5000+</h2>
    <div className="w-[20%] h-[3px] md:w-[20%] mt-1 bg-red-500 "></div>
    <h2 className=" font-bold text-3xl text-red-500">Daily Share Food</h2>
  </div>                                                                                      
    <div>
    <h2 className=" font-bold text-3xl text-red-500">4000+</h2>
    <div className="w-[20%] h-[3px] md:w-[20%] mt-1 bg-red-500 "></div>
    <h2 className=" font-bold text-3xl text-red-500">Donate</h2>
  </div>                                                                                      
    <div>
    <h2 className=" font-bold text-3xl text-red-500">2000+</h2>
    <div className="w-[20%] h-[3px] md:w-[20%] mt-1 bg-red-500 "></div>
    <h2 className=" font-bold text-3xl text-red-500">Active Member</h2>
  </div>
  
  
  </div>                                                                                      
 </div>
);
};

export default About;