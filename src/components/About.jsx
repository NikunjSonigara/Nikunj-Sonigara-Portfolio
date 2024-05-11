import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import Nikunj2Image from "../assets/images/Nikunj2.jpg";
import NikunjResume from "../assets/NikunjResume84.pdf"

const About = () => {
    const handleDownload = () => {
        const fileUrl = NikunjResume;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Nikunj Sonigara Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className='border-b border-neutral-900 pb-4z'>
            <h2 className='my-20 text-center text-4xl'>
                About
                <span className='text-neutral-500'> Me</span>
            </h2>
            <div className='flex flex-wrap'>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img src={Nikunj2Image} alt="Nikunj Sonigara" className=' rounded-2xl' />
                    </div>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 text-md sm:text-xl'>{ABOUT_TEXT}</p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <button className="sparkle-button" onClick={handleDownload}>
                            <span className="text">Download Resume</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;