import { motion } from 'framer-motion';
import React from 'react';
import { RiReactjsLine, RiFirebaseFill, RiNextjsFill } from 'react-icons/ri';
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { SiMongodb, SiFlutter, SiIpfs } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className=' flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className=' text-7xl text-cyan-400' />
                </motion.div>
                <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiNextjsFill className=' text-7xl text-white' />
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <BiLogoPostgresql className=' text-7xl text-blue-400' />
                </motion.div>
                <motion.div variants={iconVariants(7.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNode className=' text-7xl text-green-400' />
                </motion.div>
                <motion.div variants={iconVariants(8.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className=' text-7xl text-green-600' />
                </motion.div>
                <motion.div variants={iconVariants(9.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiFlutter className=' text-7xl text-blue-500' />
                </motion.div>
                <motion.div variants={iconVariants(10.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiFirebaseFill className=' text-7xl text-yellow-400' />
                </motion.div>
                <motion.div variants={iconVariants(11.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiIpfs className=' text-7xl text-cyan-400' />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;