import React from "react";
import { motion } from "framer-motion";

const ProfessonalTab = () => {
   
  return (
    <div>
    <div className="w-full md:flex  pt-10 justify-between">
        <div className="p-10 md:w-1/2"> <p className=" text-designColor uppercase">Features</p>
        <p className="text-white uppercase md:text-6xl text-4xl font-bold">Design Skill</p>
        <div className="mt-10">
    <div>
      <p className="text-sm font-base text-start text-white">Photoshot</p>
      <div className="w-full overflow-hidden py-2">
        <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className={`w-[100%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-r from-red-700 via-yellow-400 to-green-600`}
          >
            <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
              {/* {item?.score} */}
              100%
            </span>
          </motion.span>
        </span>
      </div>
    </div>
    <div>
      <p className="text-sm font-base text-start text-white">Figma</p>
      <div className="w-full overflow-hidden py-2">
        <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className={`w-[90%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-r from-red-700 via-yellow-400 to-green-600`}
          >
            <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
              {/* {item?.score} */}
              90%
            </span>
          </motion.span>
        </span>
      </div>
    </div>
    <div>
      <p className="text-sm font-base text-start text-white">ADOBE XD.</p>
      <div className="w-full overflow-hidden py-2">
        <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className={`w-[70%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-r from-red-700 via-yellow-400 to-green-600`}
          >
            <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
              70%
            </span>
          </motion.span>
        </span>
      </div>
    </div>
    </div>
  </div>
  <div className="p-10 md:w-1/2"> <p className=" text-designColor uppercase">Features</p>
        <p className="text-white uppercase md:text-6xl text-4xl font-bold">Development Skill</p>
        <div className="mt-10">
    <div>
      <p className="text-sm font-base text-start text-white">HTML</p>
      <div className="w-full overflow-hidden py-2">
        <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className={`w-[100%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-r from-red-700 via-yellow-400 to-green-600`}
          >
            <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
              {/* {item?.score} */}
              100%
            </span>
          </motion.span>
        </span>
      </div>
    </div>
    </div>
    <div>
      <p className="text-sm font-base text-start text-white">CSS</p>
      <div className="w-full overflow-hidden py-2">
        <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className={`w-[90%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-r from-red-700 via-yellow-400 to-green-600`}
          >
            <span className="text-sm font-medium inline-flex absolute -top-6 right-0">
              {/* {item?.score} */}
              90%
            </span>
          </motion.span>
        </span>
      </div>
    </div>
    <div>
      <p className="text-sm font-base text-start text-white">JAVASCRIPT</p>
      <div className="w-full overflow-hidden py-2">
        <span className="w-full h-2 flex-1 inline-flex bg-black rounded-md relative">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className={`w-[60%] h-full rounded-md absolute left-0 top-0 bg-gradient-to-r from-red-700 to-yellow-400`}
          >
            <span className="text-sm font-medium inline-flex absolute -top-6 right-0 text-white">
              60%
            </span>
          </motion.span>
        </span>
      </div>
    </div>
  </div>


       
  </div>
  </div>
  );
};

export default ProfessonalTab;
