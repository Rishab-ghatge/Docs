import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Form = ({ onSubmitData, onClose }) => {
  const [desc, setdesc] = useState("");
  const [filesize, setfilesize] = useState("");
  const [file, setfile] = useState(null, ""); //File store karane kai liya isko null liya hai

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmitData({ desc, filesize, file });
  //   setdesc("");
  //   setfilesize("");
  //   setfile("");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(file); // this adds correct base64 MIME header
  
    reader.onloadend = () => {
      const base64file = reader.result;
      const newDoc = {
        desc,
        filesize,
        file: base64file, // base64 with MIME
      };
      onSubmitData(newDoc); // send back to Foreground.jsx
      setdesc("");
      setfilesize("");
      setfile(null);
    };
  };

  return (
    <div className="fixed z-[4] w-full h-full bg-zinc-900 opacity-75 flex justify-center items-center">
      <div className="bg-zinc-600 p-6 rounded-lg w-80 space-y-5">
        <div className=" relative">
          <h1 className="text-center text-2xl text-white font-semibold">
            Upload Data
          </h1>
          <IoMdCloseCircleOutline
            onClick={onClose}
            className=" absolute right-0 top-2 text-xl cursor-pointer text-white"
          />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
          <input
            type="text"
            placeholder="Enter Description"
            className="p-2.5 bg-white rounded-lg outline-none w-full"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            required
          />
          <input
            type="number"
            placeholder="File size"
            className="p-2.5 bg-white rounded-lg outline-none w-full"
            value={filesize}
            onChange={(e) => {
              setfilesize(e.target.value);
            }}
          />
          {/* <input
            type="file"
            className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            value={file}
            onChange={(e) => {
              setfile(e.target.value);
            }}
            required
          /> */}
          <input
            type="file"
            accept=".pdf"
            className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            onChange={(e) => setfile(e.target.files[0])}
            required
          />
          <button className="p-2.5 bg-blue-700 text-white font-semibold cursor-pointer rounded-lg outline-none w-full">
            Add To Docs
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
