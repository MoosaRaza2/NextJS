import React, { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projectsDetails } from "../constants";


const PriceBlock = () =>{
    return(
        <>
         <div className="mt-12 bg-[#212428] shadow-card opacity-[1] py-12 relative rounded-[10px] flex flex-col justify-center  gap-[50px] sm:px-[40px] px-[10px] flex-wrap lg:flex-nowrap items-stretch"
            // style={{ zIndex: -10 }}
        >
            <div className="flex justify-center items-center w-full">
                <span className="text-[#fff] text-3xl font-bold">Our Pricing</span>
            </div>
            <div className="hr bg-[#212428] hr-line my-1"></div>
            <div className="w-full">
                <motion.div
                      variants={fadeIn("", "spring")}
                      className=" bg-[#212428] shadow-card  w-full p-2 sm:p-14 md:p-8 rounded-[10px] sm:w-[75%] mx-[auto] py-[60px] sm:py-[20px]  flex flex-col items-center justify-center gap-[40px] text-center"
                    >
                        <span className="text-white text-[26px]">$20/hour</span>
                        <p className="text-[14px] text-white tracking-wider">after the onborading call, we can see how much you need per month for as per your requirement maybe on off or retainer then after the hours alocation we start the work</p>
                        <div className="hr bg-[#212428] hr-line my-1"></div>
                        <button className='bg-[#bd9b7c] uppercase text-white shadow-card rounded-[6px] px-[40px] py-[10px]'>book a meeting</button>
                    </motion.div>
            </div>
        </div>
        </>
    )
}

export default SectionWrapper(PriceBlock, "");