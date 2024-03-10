import React from 'react'

const Experiance = () => {
  return (
   <div>
     <div className=' text-center m-20'>
        <p className=' text-designColor'>2010 - 2022</p>
        <p className='text-white text-5xl font-bold uppercase'>Job Experience</p>
    </div>
    <div className='md:flex justify-between m-5 md:m-20'>
        <div className='group mr-20'>
    <div className='rounded-lg shadow-md shadow-black h-[300px] p-10 md:w-[500px] w-[400px] bg-[#202226] group-hover:bg-gradient-to-tr duration-500 from-black to-primaryColor/80'>
     <div className='flex justify-between'>
     <div className='text-2xl text-white uppercase font-bold'>Web Developer & Trainer</div>
     <div className='text-red-600 shadow-sm shadow-black rounded-lg p-2 h-10 -mr-2  w-auto'>MALAYSIA</div>
</div>
<p className='text-md text-lightText mb-10 group-hover:text-white duration-500'>Apple Developer Team - (2012 - 2016)</p>
<p className='md:text-xl text-lg text-lightText group-hover:text-white duration-500'>A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy.
</p>
</div>
</div>


<div className='group mr-20 mt-10 md:mt-0'>
    <div className='rounded-lg shadow-md shadow-black h-[300px] p-10 md:w-[500px] w-[400px] bg-[#202226] group-hover:bg-gradient-to-tr from-black to-primaryColor/80'>
     <div className='flex justify-between'>
     <div className='text-2xl text-white uppercase font-bold'>Front-end Developer</div>
     <div className='text-red-600 shadow-sm shadow-black rounded-lg h-10 p-2'>INDIA</div>
</div>
<p className='text-md text-lightText mb-10 group-hover:text-white'>Nike - (2020 - 2011)</p>
<p className='md:text-xl text-lg text-lightText group-hover:text-white'>The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.
</p>
</div>
</div>
</div>
   </div>
  )
}

export default Experiance