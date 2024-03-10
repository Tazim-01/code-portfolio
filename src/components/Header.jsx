import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";



const Header = () => {
  const [showMenu,setShowmenu]=useState(false);

  const navigationArray = [
    { title: "Home", link: "hero" },
    { title: "About", link: "about" },
    { title: "Services", link: "services" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Resume", link: "cv" },
    { title: "Contact", link: "contact" }

  ];

  return (
    
    <header className="w-full h-20  sticky top-0 z-50  bg-[#0f1013]/95 bg-opacity-95 shadow-xl bg-primaryColor drop-shadow-md ">
      <div className="h-full max-w-screen-xxl mx-auto flex items-center justify-between">
        <div className="ml-2">
          <Link to={'/'}>
          <img src={logo} alt="logo" className="w-24" />
          </Link>
        </div>
        <div className="hidden md:inline-flex items-center gap-6">
          {navigationArray.map(({ title, link }) => (
            <Link to={link} key={title}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            >
              <p
                className="text-sm uppercase text-lightText font-semibold hover:text-designColor cursor-pointer duration-300"
              >
                {title}
              </p>
            </Link>
          ))}

          <button className="text-designColor/70 text-sm uppercase font-semibold  bg-primaryColor px-6 py-2 mr-2 rounded-md hover:bg-black hover:text-designColor duration-300">
             <a href="#" target="blank">Hire me</a>
          </button>
          
        </div>
        <div className="md:hidden">
            <div className="h-10 w-10 mr-3">

                <IoMenu onClick={()=>setShowmenu(!showMenu)} className="text-3xl text-designColor/50 bg-black rounded-2xl p-2 h-10 w-10 cursor-pointer hover:text-designColor/100 duration-300"/>
                
            </div>
          </div>
      </div>
      {showMenu &&(
        <div className="bg-black/80 text-white min-h-screen top-0 md:hidden absolute w-full">
          <div className=" w-2/3 bg-[#16181C] min-h-screen">
            <div className="w-full flex justify-between items-center">
            <img src={logo} alt="logo" className="w-24 m-4" />
            <IoClose onClick={()=>setShowmenu(false)} className=" text-designColor/50 bg-black rounded-2xl text-3xl m-4 hover:text-designColor/100"/>
            </div>
            <p className="text-white p-5">Inbio is a all in one personal portfolio WordPress theme. You can customize everything.</p>


            <div className="items-center gap-6">
          {navigationArray.map(({ title, link }) => (
            <Link onClick={()=>setShowmenu(false)} to={link} key={title}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
              <p
                className="text-sm uppercase text-lightText font-semibold hover:text-designColor cursor-pointer duration-300 p-3"
              >
                {title}
              </p>
            </Link>
          ))}

          <button className="text-designColor/70 text-sm uppercase font-semibold ml-3 mt-2 bg-primaryColor px-6 py-2 mr-2 rounded-md hover:bg-black hover:text-designColor duration-300">
             <a href="#" target="blank">Hire me</a>
          </button>


          <div className='flex items-center m-5 gap-3'>
                <a href="#">
                <FaFacebookSquare className='text-3xl hover:text-designColor cursor-pointer duration-300'/>
                </a>
                <a href="#">
                <FaLinkedin className='text-3xl hover:text-designColor cursor-pointer duration-300'/>
                </a>
                <a href="#">
                <FaGithubSquare className='text-3xl hover:text-designColor cursor-pointer duration-300'/>
                </a>
                
                
                
            </div>
          
        </div>
        

          </div>
          
        </div>

      )}
    </header>
    
  );
};

export default Header;
