import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import NikunjImage from "../assets/images/Nikunj.jpeg";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.p variants={container(0)} initial="hidden" animate="visible" className='text-2xl pb-5 lg:pb-8 font-thin tracking-tight lg:mt-16 lg:text-4xl'>Hello, I am</motion.p>
                        <motion.h1 variants={container(0.5)} initial="hidden" animate="visible" className='pb-8 lg:pb-16 text-4xl font-thin tracking-tight lg:mt-12 md:text-6xl lg:text-8xl'>Nikunj Sonigara</motion.h1>
                        <motion.span variants={container(1)} initial="hidden" animate="visible" className='pb-6 bg-gradient-to-t from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl lg:text-4xl tracking-tight text-transparent'>I'm a <ReactTyped
                            strings={['Flutter Developer', 'Full Stack Developer', 'Blockchain Developer', 'Fast Learner']}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        /></motion.span>
                        <motion.div variants={container(1.5)} initial="hidden" animate="visible" className='pb-16'>
                            <a className="sparkle-button" href='https://docs.google.com/forms/d/e/1FAIpQLScf3r-4rFxervg1Erm--lr93p4PSGfKqqNuNVaPuQJiez7Zvg/viewform' target='_blank' rel='noreferrer'>
                                <span className="text">Hire Me</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className='flex justify-center rounded-2xl overflow-hidden'>
                        <img src={NikunjImage} alt="Nikunj Sonigara" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;