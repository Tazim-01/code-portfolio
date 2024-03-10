import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { FaFacebookSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-primaryColor'>
        <Container className='flex flex-col md:flex-row items-center justify-center text-lightText md:justify-between pb-14  gap-2 md:py-2'>
            <img src={logo} alt="logo" className='w-24' />
            <p className='text-sm lowercase hover:text-white duration-300'>All right reserved @me</p>
            <div className='flex gap-x-5'>
                <a href="#" target='blank'>
                <FaFacebookSquare className='text-2xl hover:text-designColor cursor-pointer duration-300'/>
                </a>
                <a href="#" target='blank'>
                <FaLinkedin className='text-2xl hover:text-designColor cursor-pointer duration-300'/>
                </a>
                <a href="#" target='blank'>
                <FaGithubSquare className='text-2xl hover:text-designColor cursor-pointer duration-300'/>
                </a>
                
                
                
            </div>
        </Container>
    </div>
  )
}

export default Footer