import React from "react";
import Container from "../components/Container";
import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";

const About = () => {
  return (
    <section>
      <Container><div>
          <div className="bg-primaryColor mx-auto px-6 py-9 flex justify-between">
      <div className="mt-6">
        <p className="text-designColor text-1xl">SPECIAL FACILITIES</p>
        <h1 className="text-lightText text-7xl font-bold">
          Special Facilities For <br /> Our Patients
        </h1>
      </div>
      <div>
        <div className="flex bg-primaryColor shadow-xl drop-shadow-md p-6 gap-2 mt-3">
          <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center">
          <FaLayerGroup className=" text-designColor  text-4xl "  />
          </div>
          <div>
            <h1 className="text-white text-3xl font-bold">Rehabilitation Retreat</h1>
            <p className="text-lightText font-bold">A serene haven dedicated to physical and <br/> emotional recovery, providing specialized <br/> therapies.</p>
          </div>
        </div>


        <div className="flex bg-primaryColor shadow-xl drop-shadow-md p-6 gap-2 mt-3">
          <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center">
          <MdOutlineSecurity className=" text-designColor  text-4xl "  />
          </div>
          <div className="">
            <h1 className="text-white text-3xl font-bold">Adventure Basecamp</h1>
            <p className="text-lightText font-bold">A serene haven dedicated to physical and <br/> emotional recovery, providing specialized <br/> therapies.</p>
          </div>
        </div>



        <div className="flex bg-primaryColor shadow-xl drop-shadow-md p-6 gap-2 mt-3">
          <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center">
          <GiSelfLove className=" text-designColor  text-4xl "  />
          </div>
          <div className="">
            <h1 className="text-white text-3xl font-bold">Child Development</h1>
            <p className="text-lightText font-bold">A serene haven dedicated to physical and <br/> emotional recovery, providing specialized <br/> therapies.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
</Container>

  </section>
  );
};

export default About;
