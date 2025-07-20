import React from "react";
import { FcDocument } from "react-icons/fc";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
const Cards = ({ data, reference,handleDelete }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
      className="relative shrink-0 w-40 h-52 md:w-52 md:h-64 rounded-4xl bg-zinc-900/90 text-white px-5 py-8 overflow-hidden m-5"
    >
      <div className="flex items-center justify-between">
        <FcDocument className="text-xl" />
        <IoMdCloseCircleOutline onClick={handleDelete} />
      </div>
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-5 mb-3 text-sm">
          <h5>{data.filesize}</h5>
          <span>
            <FaRegArrowAltCircleDown />
          </span>
        </div>
        {/* <div className={`tag w-full py-3 bg-blue-600 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">Download Now</h3>
          </div> */}
        <a
          href={data.file}
          download="document.pdf"
          className="tag w-full py-3 bg-blue-600 flex items-center justify-center"
        >
          <h3 className="text-sm font-semibold">Download Now</h3>
        </a>
      </div>
    </motion.div>
  );
};

export default Cards;
