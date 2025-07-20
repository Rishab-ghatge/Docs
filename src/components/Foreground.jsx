import React, { useEffect, useRef, useState } from 'react'
import Cards from './Cards'
import { motion} from "framer-motion"
import { FcAddDatabase } from "react-icons/fc";
import Form from './Form';

const Foreground = () => {
  const ref = useRef(null)
  const [showform, setshowform] = useState(false)
  const [data, setData] = useState([])
  const [isInitialized, setIsInitialized] = useState(false);

  const handleFormSubmit = (newDoc) => {
    const newCard = {
      desc: newDoc.desc,
      filesize: newDoc.filesize + 'mb',
      file: newDoc.file,
    };
    setData(prev => [...prev, newCard]); // Add new card
    setshowform(false); // Hide form after submit
  };
  
  useEffect(() => {
    const saved = localStorage.getItem("allDocs")
    if(saved){
      setData(JSON.parse(saved))
    }
    setIsInitialized(true); // allow saving only after initial load
  }, [])

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("allDocs", JSON.stringify(data));
    }
  }, [data, isInitialized]);

  const Delete = (i)=>{
    const isConfirmed = confirm("Are You sure")
    if(isConfirmed){
      const copy = [...data]
      copy.splice(i,1)
      setData(copy)
    }
    else{
      return null
    }
  }
  
  
  return (
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap '>
        <FcAddDatabase className='text-4xl absolute right-1 md:right-14 bg-blue-600 p-0.5 cursor-pointer m-5' onClick={()=>setshowform(true)}/>
        {data.map((item,index)=>(
          <Cards key={index} data={item} reference ={ref} handleDelete={()=>Delete(index)}/>
        ))}
        
        {/* AB KYA HOGA KI JAISE HE ADD PAI DABAYGAI VAISE HE FORM KHULEGA AND JAB HUM FORM KO SUBMIT KAREGA TOH YAI FORM WALE COMPONENT PAI JAYGA AND VAHA SAI JOH CALLBACK FUNCTION HANDLEFORMSUBMIT YAI DATA LAIKER AYGA FORM COMPONENT SAI */}
        {showform && <Form onSubmitData={handleFormSubmit} onClose={()=>setshowform(false)}/>}
      </div>
  )
}

export default Foreground