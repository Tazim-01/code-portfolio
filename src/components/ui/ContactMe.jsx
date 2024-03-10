import React, { useState } from "react";
import Container from "../Container";
import { FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const ContactMe = () => {
  const [userName, setUserName] = useState("");
  const [Number, setNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [Success, setSuccess] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Failed, setFailed] = useState(false);

  const [errUserName, setErrUserName] = useState(false);
  const [errNumber, setErrNumber] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errSubject, setErrSubject] = useState(false);
  const [errMessage, setErrMessage] = useState(false);

  const handleSubmit = () => {
    if (userName === "") {
      setErrUserName("UserName is required!");
    } else if (Number === "") {
      setErrNumber("PhoneNumber is required!");
    } else if (Email === "") {
      setErrEmail("Email is required!");
    } else if (Subject === "") {
      setErrSubject("Subject field is emty!");
    } else if (Message === "") {
      setErrMessage("Message is required!");
    } else {
      setLoading(true);

      axios
        .post("https://getform.io/f/lejEX5dj", {
          Name: userName,
          Phone: Number,
          Email: Email,
          Subject: Subject,
          Message: Message,
        })
        .then((res) => {
          if (res?.status === 200) {
            toast.success("Message sent successfilly");

            setLoading(false);
            setSuccess(true);
          } else {
            setLoading(false);
          }
        });
    }
  };

  return (
    <section name="contact"><Container class="contactMe" className="border-b border-black">
    <div className="">
      <div className="flex flex-col items-center mt-10 ">
        <p className="text-designColor text-xl">Contact</p>
        <h2 className="text-5xl text-white font-bold">Contact With Me</h2>
      </div>
      <div className="md:flex gap-7">
        <div className="md:w-1/3 mx-5 mt-5">
          <div>
            <div className="flex items-center p-6 pb-14 bg-[#212428] rounded-lg shadow-black shadow-md mr-6]">
              <div className=" rounded-lg group">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/contact1.png"
                    className=" group-hover:scale-110 duration-500 rounded-md"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-3xl pt-5 pb-5">
                    Nevine Acotanza
                  </p>
                  <p className="text-white/40 pb-5">
                    Chief Operating Officer
                  </p>
                  <p className="text-white/40 pb-5">
                    I am available for freelance work. Connect with me via and
                    call in to my account.
                  </p>
                  <div>
                    <p className="text-white/40">
                      Phone:
                      <span className="text-white hover:text-designColor duration-500">
                        +8801673813833
                      </span>
                    </p>
                    <p className="text-white/40 pb-5">
                      Email:
                      <span className="text-white hover:text-designColor duration-500">
                        admin@example.com
                      </span>
                    </p>
                    <p className="text-white/40 uppercase">Find With Me</p>
                    <div className="flex gap-5 pt-3">
                      <div
                        className="flex items-center justify-center h-10 w-10 bg-primaryColor hover:bg-[#191B1E] rounded-lg group hover:-translate-y-2 duration-500 shadow-md shadow-black
                 hover:text-designColor"
                      >
                        <FaFacebookSquare className="text-white text-2xl " />
                      </div>

                      <div className="flex items-center justify-center h-10 w-10 bg-primaryColor hover:bg-[#191B1E] rounded-lg group hover:-translate-y-2 duration-500 shadow-md shadow-black">
                        <FaWhatsapp className="text-white text-2xl" />
                      </div>

                      <div className="flex items-center justify-center h-10 w-10 bg-primaryColor hover:bg-[#191B1E] rounded-lg group hover:-translate-y-2 duration-500 shadow-md shadow-black">
                        <FaXTwitter className="text-white text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {Success ? (
          <div className="md:w-2/3 m-5 h-[500px] md:h-auto bg-primaryColor shadow-md shadow-black rounded-lg flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <p className="text-green-300 text-2xl">{`Thank you ${userName}.`}</p>
              <p className="text-green-400 text-l">
                We will contact you soon.
              </p>
            </div>
          </div>
        ) : (
          <>
            {Loading ? (
              <div className="md:w-2/3 m-5 h-[500px] md:h-auto bg-primaryColor shadow-md shadow-black p-10 rounded-lg gap-7">
                <div className="flex flex-col items-center justify-center h-full">
                  <RotatingLines />
                  <p className="text-white">Your Messages is sending...</p>
                </div>
              </div>
            ) : (
              <div className="md:w-2/3 mx-5 item-center bg-primaryColor shadow-md shadow-black p-10 rounded-lg flex flex-col gap-7 my-5">
                <div className="md:flex md:justify-between gap-10">
                  <div className="flex flex-1 flex-col relative">
                    <p className="text-sm uppercase text-white/40 pb-1">
                      Your name :{" "}
                    </p>
                    <input
                      type="text"
                      className="inputStyle mb-4 md:mb-0 bg-[#191B1E] h-12 rounded-md shadow-md px-2 shadow-black text-white outline-none border border-transparent focus-within:border-designColor"
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                    />
                    {errUserName && (
                      <p className="text-red-500 absolute -bottom-6 font-semibold text-sm italic">
                        User name is required!
                      </p>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col relative">
                    <p className="text-sm uppercase text-white/40 pb-1">
                      Phone Number :{" "}
                    </p>
                    <input
                      type="text"
                      className="inputStyle bg-[#191B1E] px-2 h-12 rounded-md shadow-md shadow-black text-white outline-none border border-transparent focus-within:border-designColor"
                      onChange={(e) => setNumber(e.target.value)}
                      value={Number}
                    />
                    {errNumber && (
                      <p className="text-red-500 font-semibold text-sm italic absolute -bottom-6">
                        PhoneNumber is required!
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1 relative">
                  <p className="text-sm uppercase text-white/40">Email : </p>
                  <input
                    type="text"
                    className="inputStyle bg-[#191B1E] px-2 h-12 rounded-md shadow-md shadow-black text-white outline-none border border-transparent focus-within:border-designColor"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                  />
                  {errEmail && (
                    <p className="text-red-500 absolute -bottom-6 font-semibold text-sm italic">
                      Email is required!
                    </p>
                  )}
                </div>

                <div className="flex  flex-col gap- relative">
                  <p className="text-sm uppercase text-white/40">
                    Subject :{" "}
                  </p>
                  <input
                    type="text"
                    className="inputStyle bg-[#191B1E] px-2 h-12 rounded-md shadow-md shadow-black text-white outline-none border border-transparent focus-within:border-designColor"
                    onChange={(e) => setSubject(e.target.value)}
                    value={Subject}
                  />
                  {errSubject && (
                    <p className="text-red-500 absolute -bottom-6 font-semibold text-sm italic">
                      Subject is required!
                    </p>
                  )}
                </div>

                <div className="flex  flex-col gap-1 relative">
                  <p className="text-sm uppercase text-white/40">
                    Your Message{" "}
                  </p>
                  <textarea
                    type="text"
                    className="inputStyle bg-[#191B1E] px-2 py-2 rounded-md shadow-md shadow-black text-white outline-none border border-transparent focus-within:border-designColor"
                    cols={1}
                    rows={5}
                    onChange={(e) => setMessage(e.target.value)}
                    value={Message}
                  />
                  {errMessage && (
                    <p className="text-red-500 absolute -bottom-6 font-semibold text-sm italic">
                      Message is required!
                    </p>
                  )}
                </div>
                <div className="w-auto h-auto flex justify-center mt-1 hover:-translate-y-1 duration-300">
                  <button
                    onClick={handleSubmit}
                    className="text-white bg-[#202327] h-14 w-[750px] shadow-black shadow-md rounded-md uppercase"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
    <Toaster position="top-center" />
  </Container></section>
  );
};

export default ContactMe;
