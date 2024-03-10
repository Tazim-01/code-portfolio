import React from 'react'

const EducationTab = () => {
  return (
    <div className=''>
        <div className='m-14 mt-20 text-center'>
            <div className=' text-designColor'>1998 - 2010</div>
            <div className=' text-white text-5xl uppercase font-bold'>Education Quality</div></div>
            
            
            <div className='md:flex justify-between md:m-20 m-5'>
            <div className='group mb-5 md:mb-0'>
                 <div className='rounded-lg shadow-md shadow-black h-[300px] p-10 md:w-[500px] w-[400px] bg-[#202226] group-hover:bg-gradient-to-tr from-black to-primaryColor/80'>
                  <div className='flex justify-between'>
                  <div className='text-2xl text-white uppercase font-bold'>BSc in Computer Science</div>
                  <div className='text-red-600 shadow-sm shadow-black rounded-lg p-2'>3.90/4</div>
           </div>
           <p className='text-md text-lightText mb-10 group-hover:text-white'>University of DVI (2006 - 2010)</p>
           <p className='md:text-xl text-lg text-lightText group-hover:text-white'>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.
           </p>
       </div>
       </div>



       <div className='group'>
                 <div className='rounded-lg shadow-md shadow-black h-[300px] p-10 md:w-[500px] w-[400px] bg-[#202226] group-hover:bg-gradient-to-tr from-black to-primaryColor/80'>
                  <div className='flex justify-between'>
                  <div className='text-2xl text-white uppercase font-bold'>AS - Science & Information</div>
                  <div className='text-red-600 shadow-sm shadow-black rounded-lg p-2'>4.75/5</div>
           </div>
           <p className='text-md text-lightText mb-8 group-hover:text-white'>SuperKing College (2001 - 2005)</p>
           <p className='md:text-xl text-lg text-lightText group-hover:text-white'>Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.
           </p>
       </div>
       </div>
            </div>
    </div>
        
  )
}

export default EducationTab