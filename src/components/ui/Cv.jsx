import { useState } from 'react';
import React from 'react'
import ProfessonalTab from './professionalTab';
import EducationTab from './EducationTab';
import Experiance from './Experiance';
import Interview from './Interview';

const Cv = () => {

  const [education, setEducation] = useState(true);
  const [professional, setProfessional] = useState(false);
  const [experience, setExperience] = useState(false);
  const [interview, setInterview] = useState(false);

  const handleEducation = () => {
    setEducation(true);
    setProfessional(false);
    setExperience(false);
    setInterview(false);
  };
  const handleProfession = () => {
    setEducation(false);
    setProfessional(true);
    setExperience(false);
    setInterview(false);
  };
  const handleExperience = () => {
    setEducation(false);
    setProfessional(false);
    setExperience(true);
    setInterview(false);
  };
   const handleinterview = () => {
    setEducation(false);
    setProfessional(false);
    setExperience(false);
    setInterview(true);
  };

  return (
    <section class="cv"><div className="flex flex-col items-center justify-center gap-5 mt-10">
    <p className=" text-designColor uppercase font-semibold">7+ YEARS OF EXPERIENCE</p>
    <p className="text-6xl text-white uppercase font-bold">My Resume</p>
    </div>
    <div className="text-lightText flex w-full justify-center pt-5">
    <div onClick={handleEducation} className={`flex items-center justify-center hover:text-designColor duration-500 cursor-pointer shadow-lg shadow-black rounded-lg md:w-[300px] w-[200px] h-[80px] md:text-3xl text-lg font-bold ${education && "text-designColor -translate-y-1"}`}>Education</div>
    <div onClick={handleProfession} className={`flex items-center justify-center hover:text-designColor duration-500 cursor-pointer shadow-lg shadow-black rounded-lg md:w-[300px] w-[200px] h-[80px] md:text-3xl text-lg font-bold ${professional && "text-designColor -translate-y-1"}`}>Professional Skills</div>
    <div onClick={handleExperience} className={`flex items-center justify-center hover:text-designColor duration-500 cursor-pointer shadow-lg shadow-black rounded-lg md:w-[300px] w-[200px] h-[80px] md:text-3xl text-lg font-bold ${experience && "text-designColor -translate-y-1"}`}>Experience</div>
    <div onClick={handleinterview} className={`flex items-center justify-center hover:text-designColor duration-500 cursor-pointer shadow-lg shadow-black rounded-lg md:w-[300px] w-[200px] h-[80px] md:text-3xl text-lg font-bold ${interview && "text-designColor -translate-y-1"}`}>Interview</div>
    </div>
    <div>
        {professional &&<ProfessonalTab/>}
        {education && <EducationTab/>}
        {experience && <Experiance/>}
        {interview && <Interview/>}
    </div>
    </section>
    )
};

export default Cv