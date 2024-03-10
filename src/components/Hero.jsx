import React from "react";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";
import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { CiSquareChevDown } from "react-icons/ci";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FiFilePlus } from "react-icons/fi";
import { FaRegSnowflake } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Button from "./ui/Button";
import { useState } from "react";

const Hero = () => {
  const words = ["Eye Sergeon Specialist", "Eye Consultant"];
  return(
    <section name="hero">
      <div className=" h-full">
        <img className="md:hidden h-[300px] w-full " src="bannerC.jpg" />
        <div className="w-full h-[400px] bg-[#212428] md:h-[700px] md:bg-hero-image bg-cover z-40">
          <Container className="md:py-20 py-10">
            <div className="md:w-1/2 flex flex-col gap-y-5 w-full">
              <p className="md:text-base md:text-start uppercase -mt-2 text-lightText pl-5 md:pl-0">
                CONSULTANT EYE SERGEON
              </p>
              <h2 className="md:text-7xl text-5xl pl-5 md:pl-0 font-bold text-white">
                Hi, I’m <span className="text-designColor">William Lina</span>
              </h2>
              <h2 className="md:text-4xl text-3xl font-bold text-white pl-5 md:pl-0">
                a{" "}
                <Typewriter
                  words={words}
                  loop={100}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </h2>
              <p className="text-base text-lightText md:pr-32 font-medium pl-5 md:pl-0">
                Explore the professional journey, expertise, and achievements of a
                dedicated medical practitioner. Discover education, experience,
                clinical skills, research, and patient care .
              </p>
              <div className="w-full flex justify-center items-center md:justify-start">
                <Button>
                <title>Hire Me</title>
              </Button>
              </div>
            </div>
          </Container>
        </div>
  
        <div className="bg-primaryColor mx-auto px-6 py-9 flex flex-col md:flex-row md:justify-between">
          <div className="mt-6">
            <p className="text-designColor text-1xl">SPECIAL FACILITIES</p>
            <h1 className="text-lightText md:text-7xl text-4xl font-bold mb-10">
              Special Facilities For <br /> Our Patients
            </h1>
          </div>
          <div>
            <div className="flex bg-primaryColor shadow-xl drop-shadow-md p-6 gap-2 mt-3">
              <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center">
                <FaLayerGroup className=" text-designColor  text-4xl " />
              </div>
              <div>
                <h1 className="text-white text-3xl font-bold">
                  Rehabilitation Retreat
                </h1>
                <p className="text-lightText font-bold">
                  A serene haven dedicated to physical and <br /> emotional
                  recovery, providing specialized <br /> therapies.
                </p>
              </div>
            </div>
  
            <div className="flex bg-primaryColor shadow-xl drop-shadow-md p-6 gap-2 mt-3">
              <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center">
                <MdOutlineSecurity className=" text-designColor  text-4xl " />
              </div>
              <div className="">
                <h1 className="text-white text-3xl font-bold">
                  Adventure Basecamp
                </h1>
                <p className="text-lightText font-bold">
                An adventure facility providing equipment,<br/>training, and guided experiences. 
                </p>
              </div>
            </div>
  
            <div className="flex bg-primaryColor shadow-xl drop-shadow-md p-6 gap-2 mt-3">
              <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center">
                <GiSelfLove className=" text-designColor  text-4xl " />
              </div>
              <div className="">
                <h1 className="text-white text-3xl font-bold">
                  Child Development
                </h1>
                <p className="text-lightText font-bold">
                A nurturing environment for children's growth<br/>and learning, equipped with a range of<br/> developmental programs.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="md:flex p-6 bg-primaryColor my-24">
          <div className="p-5 bg-transparent shadow-xl drop-shadow-md rounded-md ml-4">
            <div className="md:h-[500px] h-[450px] overflow-hidden">
              <img
                src="/banner2.jpg"
                alt="banner2"
                className="h-auto md:w-96  srounded-md hover:scale-110 duration-500"
              />
            </div>
          </div>
          <div name="about" className="pt-5 pl-10 md:pl-20">
            <p className="text-designColor">ABOUT ME</p>
            <h1 className=" text-blue-200 text-6xl font-bold">Dr.Jerry</h1>
            <p className="text-lightText mt-5 font-bold">
              Dr. Laura Jerry brings a wealth of experience and expertise to her
              practice. With a focus on <br />
              patient-centered care, she is known for her warm and empathetic
              approach, always taking
              <br /> the time to listen to her patients’ concerns. Her extensive
              medical knowledge and dedication <br /> to staying at the forefront
              of the field make her a trusted healthcare partner.
            </p>
            <p className="text-lightText mt-4 font-bold">
              Explore the range of medical services Dr. Collins offers, including
              general check-ups,
              <br />
              preventative care, chronic disease management, and more. She is
              committed <br />
              to working with you to develop personalized treatment plans that
              suit your unique needs.
            </p>
  
            <button className="bg-primaryColor font-bold p-4 text-designColor mt-10 shadow-xl drop-shadow-md rounded-md hover:bg-slate-900">
              Learn More
            </button>
          </div>
        </div>
       <section class="services">
       <div className=" p-6 bg-primaryColor">
          <div className="text-center">
            <p className="text-designColor">SERVICES</p>
            <h1 className="text-lightText md:text-6xl text-4xl font-bold">
              Services For You & <br /> Your Family
            </h1>
          </div>
  
          <div className="mt-6">
            <div className="md:flex gap-20">
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <IoWaterOutline className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  Pediatric Healthcare
                </h1>
                <p className="text-lightText">
                  Your first line of defense in health.
                  <br /> Our primary care services cover check-ups and
                  vaccinations.
                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
  
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <CiSquareChevDown className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  Specialist Care
                </h1>
                <p className="text-lightText">
                  {" "}
                  Access to top medical specialists for
                  <br />
                  in-depth evaluation and treatment of specific health conditions.
                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
  
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <FaRegPlusSquare className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  Women's Health
                </h1>
                <p className="text-lightText">
                  {" "}
                  Tailored healthcare services for
                  <br /> women, including gynecology, obstetrics, and reproductive
                  health.
                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-6">
            <div className="md:flex gap-20 mt-6">
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg drop-shadow-md shadow-black rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <FaRegCalendarCheck className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  Geriatric Care
                </h1>
                <p className="text-lightText">
                  {" "}
                  Specialized care for our senior patients,focusing on age-related
                  health issues chronic disease.
                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
  
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <FiFilePlus className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  Surgical Expertise
                </h1>
                <p className="text-lightText">
                  {" "}
                  Cutting-edge surgical procedures and consultations with our
                  skilled surgeons.
                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500" />
                </div>
              </div>
  
              <div
                className="group mb-10 w-full bg-primaryColor shadow-lg shadow-black drop-shadow-md rounded-md md:w-1/3 h-auto p-14 hover:bg-gradient-to-tr from-black
     to-primaryColor hover:scale-105 duration-300"
              >
                <FaRegSnowflake className="text-5xl text-designColor" />
                <h1 className="mt-5 text-2xl font-bold text-lightText">
                  Diagnostic Testing
                </h1>
                <p className="text-lightText">
                  {" "}
                  State-of-the-art diagnostic services, including imaging,
                  laboratory tests, and screenings
                </p>
                <div className="pt-5">
                  <FaArrowRight className="text-xl text-transparent group-hover:text-designColor duration-500 hover:translate-x-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>
      </div>
    </section>
  )
};

export default Hero;
