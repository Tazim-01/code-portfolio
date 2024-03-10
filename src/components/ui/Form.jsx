import React from 'react'
    const [userName,setUserName] = useState("");
    const [Number,setNumber] = useState("");
    const [Email,setEmail] = useState("");
    const [Subject,setSubject] = useState("");
    const [Message,setMessage] = useState("");
    const [Success,setSuccess] = useState(false);
    const [Loading,setLoading] =useState(false);

  
    const [errUserName,setErrUserName]=useState(false);
    const [errNumber,setErrNumber]=useState(false);
    const [errEmail,setErrEmail]=useState(false);
    const [errSubject,setErrSubject]=useState(false);
    const [errMessage,setErrMessage]=useState(false);

const Form = () => {
  return (
    <div>
        <div className="w-2/3 bg-primaryColor shadow-md shadow-black p-10 rounded-lg flex flex-col gap-7">
        <div className="flex  justify-between gap-10">
            <div className="flex flex-1 flex-col gap-1 relative">
              <p className="text-sm uppercase text-white/40">Your name : </p>
              <input
                type="text"
                className="inputStyle bg-[#191B1E] h-12 rounded-md shadow-md px-2 shadow-black text-white outline-none border border-transparent focus-within:border-designColor"
                onChange={(e) => setUserName (e.target.value)}
                value={userName}
              />
              {errUserName && <p className='text-red-500 absolute -bottom-6 animate-pulse font-semibold text-sm italic'>User name is required!</p>}
            </div>
            <div className="flex flex-1 flex-col gap-1 relative">
              <p className="text-sm uppercase text-white/40">Phone Number : </p>
              <input
                type="text"
                className="inputStyle bg-[#191B1E] px-2 h-12 rounded-md shadow-md shadow-black text-white outline-none border border-transparent focus-within:border-designColor"
                onChange={(e) => setNumber(e.target.value)}
                value={Number}
              />
              {errNumber && <p className='text-red-500 font-semibold text-sm italic absolute -bottom-6'>PhoneNumber is required!</p>}
            </div>
          </div>

          <div className="flex  flex-col gap-1 relative">
              <p className="text-sm uppercase text-white/40">Email : </p>
              <input
                type="text"
                className="inputStyle bg-[#191B1E] px-2 h-12 rounded-md shadow-md shadow-black text-white outline-none border border-transparent focus-within:border-designColor"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
              {errEmail && <p className='text-red-500 absolute -bottom-6 font-semibold text-sm italic'>Email is required!</p>}
            </div>

            <div className="flex  flex-col gap- relative">
              <p className="text-sm uppercase text-white/40">Subject : </p>
              <input
                type="text"
                className="inputStyle bg-[#191B1E] px-2 h-12 rounded-md shadow-md shadow-black text-white outline-none border border-transparent focus-within:border-designColor" 
                onChange={(e)=>setSubject(e.target.value)}
                value={Subject}
                />
                {errSubject && <p className='text-red-500 absolute -bottom-6 font-semibold text-sm italic'>Subject is required!</p>}
            </div>

            <div className="flex  flex-col gap-1 relative">
              <p className="text-sm uppercase text-white/40">Your Message  </p>
              <textarea type="text"
                className="inputStyle bg-[#191B1E] px-2 py-2 rounded-md shadow-md shadow-black text-white outline-none border border-transparent focus-within:border-designColor"
                cols={1}
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
                value={Message}
                />  
                {errMessage && <p className='text-red-500 absolute -bottom-6 font-semibold text-sm italic'>Message is required!</p>}  
            </div>
            <div className='w-auto h-auto flex justify-center mt-1 hover:-translate-y-1 duration-300'>
             <button onClick={handleSubmit} className='text-white bg-[#202327] h-14 w-[750px] shadow-black shadow-md rounded-md uppercase'>Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default Form
