import React from 'react'
import Container from '../Container'
import { BiGridAlt } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { BsPcDisplay } from "react-icons/bs";

const DP = () => {
  return (
    <section name="portfolio"><Container name="portfolio" className="border-b border-black mt-10">
    <div className='flex flex-col items-center'>
     <p className='text-designColor text-xl'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
     <p className='text-white text-4xl font-bold'>My Portfolio</p>
    </div>
<div className='mb-10 mt-10'>
 <div className='md:flex gap-7 mb-10 px-4 md:px-0'>
  <div className='mb-10 md:w-1/3 w-full p-10 bg-gradient-to-tr from-primaryColor to-primaryColor/80 shadow-md shadow-black group hover:bg-black rounded-lg'>
     <div className="w-full h-72 rounded-lg overflow-hidden relative">
       <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src='portfolioimage/img1.jpg'/>
       <BiGridAlt className='absolute text-slate-500 top-4 right-4 text-xl'/>
     </div> 
     <div>
       <p className='text-designColor font-semibold uppercase text-xs pt-5 py-5'>
         Gallery
       </p>
       <div className='rounded-md overflow-hidden'>
        <h2 className='text-white font-bold group-hover:text-designColor duration-500 text-2xl cursor-pointer relative group overflow-hidden'>
         NFT Dashboard Application Development. 
         <span className='absolute text-xl text-transparent translate-y-7 -translate-x-4
         group-hover:translate-x-2 group-hover:translate-y-1 duration-500 group-hover:text-designColor'>
           <MdArrowOutward/>
         </span>                                    
        </h2>
       </div>
     </div>
   </div>


   <div className='mb-10 md:w-1/3 w-full p-10 bg-gradient-to-tr from-primaryColor to-primaryColor/80 shadow-md shadow-black group hover:bg-black rounded-lg'>
     <div className="w-full h-72 rounded-lg overflow-hidden relative">
       <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src='portfolioimage/img2.jpg'/>
       <IoVideocamOutline className='absolute text-slate-500 top-4 right-4 text-xl'/>
     </div> 
     <div>
       <p className='text-designColor font-semibold uppercase text-xs pt-5 py-5'>
         Video
       </p>
       <div className='rounded-md overflow-hidden'>
        <h2 className='text-white font-bold group-hover:text-designColor duration-500 text-2xl cursor-pointer relative group overflow-hidden'>
          Online Food Delivery Mobile App Design.                                         
         <span className='absolute text-xl text-transparent translate-y-7 -translate-x-4
         group-hover:translate-x-2 group-hover:translate-y-1 duration-500 group-hover:text-designColor'>
           <MdArrowOutward/>
         </span>                                    
        </h2>
       </div>
     </div>
   </div>


   <div className='mb-10  md:w-1/3 w-full p-10 bg-gradient-to-tr from-primaryColor to-primaryColor/80 shadow-md shadow-black group hover:bg-black rounded-lg'>
     <div className="w-full h-72 rounded-lg overflow-hidden relative">
       <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src='portfolioimage/img3.jpg'/>
       <BsBoxArrowUpRight className='absolute text-slate-500 top-4 right-4 text-xl'/>
     </div> 
     <div>
       <p className='text-designColor font-semibold uppercase text-xs pt-5 py-5'>
         External link
       </p>
       <div className='rounded-md overflow-hidden'>
        <h2 className='text-white font-bold group-hover:text-designColor duration-500 text-2xl cursor-pointer relative group overflow-hidden'>
        Travel App Design Creativity & Application.  
         <span className='absolute text-xl text-transparent translate-y-7 -translate-x-4
         group-hover:translate-x-2 group-hover:translate-y-1 duration-500 group-hover:text-designColor'>
           <MdArrowOutward/>
         </span>                                    
        </h2>
       </div>
     </div>
   </div>
 </div>
   



 <div className='md:flex  px-4 md:px-0 gap-7'>
   <div className='mb-10  md:w-1/3 w-full p-10 bg-gradient-to-tr from-primaryColor to-primaryColor/80 shadow-md shadow-black group hover:bg-black rounded-lg'>
     <div className="w-full h-72 rounded-lg overflow-hidden relative">
       <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src='portfolioimage/img4.jpg'/>
       <CiImageOn className='absolute text-slate-500 top-4 right-4 text-xl'/>
     </div> 
     <div>
       <p className='text-designColor font-semibold uppercase text-xs pt-5 py-5'>
         Image
       </p>
       <div className='rounded-md overflow-hidden'>
        <h2 className='text-white font-bold group-hover:text-designColor duration-500 text-2xl cursor-pointer relative group overflow-hidden'>
          Workout Website Design And Development.                                         
         <span className='absolute text-xl text-transparent translate-y-7 -translate-x-4
         group-hover:translate-x-2 group-hover:translate-y-1 duration-500 group-hover:text-designColor'>
           <MdArrowOutward/>
         </span>                                    
        </h2>
       </div>
     </div>
   </div>





   <div className='mb-10 md:w-1/3 w-full p-10 bg-gradient-to-tr from-primaryColor to-primaryColor/80 shadow-md shadow-black group hover:bg-black rounded-lg'>
     <div className="w-full h-72 rounded-lg overflow-hidden relative">
       <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src='portfolioimage/img5.jpg'/>
       <BiGridAlt className='absolute text-slate-500 top-4 right-4 text-xl'/>
     </div> 
     <div>
       <p className='text-designColor font-semibold uppercase text-xs pt-5 py-5'>
         Gallery
       </p>
       <div className='rounded-md overflow-hidden'>
        <h2 className='text-white font-bold group-hover:text-designColor duration-500 text-2xl cursor-pointer relative group overflow-hidden'>
          Mobile Application Landing Page Design.                                         
         <span className='absolute text-xl text-transparent translate-y-7 -translate-x-4
         group-hover:translate-x-2 group-hover:translate-y-1 duration-500 group-hover:text-designColor'>
           <MdArrowOutward/>
         </span>                                    
        </h2>
       </div>
     </div>
   </div>






   <div className='mb-10 md:w-1/3 w-full p-10 bg-gradient-to-tr from-primaryColor to-primaryColor/80 shadow-md shadow-black group hover:bg-black rounded-lg'>
     <div className="w-full h-72 rounded-lg overflow-hidden relative">
       <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src='portfolioimage/img6.jpg'/>
       <BsPcDisplay className='absolute text-slate-500 top-4 right-4 text-xl'/>
     </div> 
     <div>
       <p className='text-designColor font-semibold uppercase text-xs pt-5 py-5'>
         Standard
       </p>
       <div className='rounded-md overflow-hidden'>
        <h2 className='text-white font-bold group-hover:text-designColor duration-500 text-2xl cursor-pointer relative group overflow-hidden'>
           Restaurant Mobile Application Figma Design.                                         
         <span className='absolute text-xl text-transparent translate-y-7 -translate-x-4
         group-hover:translate-x-2 group-hover:translate-y-1 duration-500 group-hover:text-designColor'>
           <MdArrowOutward/>
         </span>                                    
        </h2>
       </div>
     </div>
   </div>
 </div>
</div>




 </Container></section>
  );
};

export default DP