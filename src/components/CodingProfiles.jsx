import { motion } from 'framer-motion';
import React from 'react';
import { SiGeeksforgeeks, SiCodingninjas, SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

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

const CodingProfiles = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Coding Profiles</motion.h2>
            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className=' flex flex-wrap items-center justify-center gap-4'>
                <motion.a variants={iconVariants(2.5)} initial="initial" animate="animate" href="https://leetcode.com/u/Nikunj2002/" target='_blank'>
                    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiLeetcode className=' text-7xl text-orange-900' />
                    </div>
                </motion.a>
                <motion.a variants={iconVariants(1.5)} initial="initial" animate="animate" href='https://auth.geeksforgeeks.org/user/nikunj_sonigara/practice' target='_blank'>
                    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiGeeksforgeeks className=' text-7xl text-green-500' />
                    </div>
                </motion.a>
                <motion.a variants={iconVariants(5)} initial="initial" animate="animate" href='https://www.codechef.com/users/nikunj2002' target='_blank'>
                    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiCodechef className=' text-7xl text-amber-100' />
                    </div>
                </motion.a>
                <motion.a variants={iconVariants(7.5)} initial="initial" animate="animate" href='https://www.naukri.com/code360/profile/183_Nikunj' target='_blank'>
                    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiCodingninjas className=' text-7xl text-orange-400' />
                    </div>
                </motion.a>
                <motion.a variants={iconVariants(8.5)} initial="initial" animate="animate" href='https://www.hackerrank.com/profile/nikunjsonigara91' target='_blank'>
                    <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <SiHackerrank className=' text-7xl text-green-800' />
                    </div>
                </motion.a>
            </motion.div>
        </div>
    );
};

export default CodingProfiles;