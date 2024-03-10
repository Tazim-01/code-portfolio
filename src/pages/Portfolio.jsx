import React from "react";
import Container from "../components/Container";
import { IoImagesOutline } from "react-icons/io5";

const Portfolio = () => {
  return (
    <div className="flex p-6 bg-primaryColor">
      <div className="p-5 bg-primaryColor shadow-xl drop-shadow-md rounded-md">
        <img src="../public/banner2.jpg" alt="Portfolio" className="h-auto w-96 rounded-md"/>

      </div>
      <div className="pt-5 pl-16">
        <p className="text-designColor">ABOUT ME</p>
        <h1 className=" text-blue-200 text-6xl font-bold">Dr. Laura Jerry</h1>
        <p className="text-lightText mt-5 font-bold">Dr. Laura Jerry brings a wealth of experience and expertise to her practice. With <br/>
        a focus on patient-centered care, she is known for her warm and empathetic <br/>
        approach, always taking the time to listen to her patients’ concerns. Her <br/>
        extensive medical knowledge and dedication to staying at the forefront of the <br/>
        field make her a trusted healthcare partner.</p>
        <p className="text-lightText mt-4 font-bold">Explore the range of medical services Dr. Collins offers, including general check-ups,<br/>
         preventative care, chronic disease management, and more. She is committed <br/>
         to working with you to develop personalized treatment plans that suit your unique needs.</p>

         <button className="bg-primaryColor font-bold p-4 text-designColor mt-10 shadow-xl drop-shadow-md rounded-md hover:bg-slate-900">Learn More</button>
      </div>
    </div>
  );
};

export default Portfolio;
