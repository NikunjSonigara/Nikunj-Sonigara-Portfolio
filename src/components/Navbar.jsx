import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='mb—20 flex items-center justify-between py-6'>
            <div className="flex flex-shrink-0 items-center">
                <span className='text-white text-3xl select-none font-rubik-moonrocks'>Ns</span>
            </div>
            <div className="m—8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin className='hover:text-blue-400 transition-all duration-300 cursor-pointer' href='https://www.linkedin.com/in/nikunj-sonigara-471620222/'/>
                <FaGithub className='hover:text-gray-600 transition-all duration-300 cursor-pointer' href='https://github.com/NikunjSonigara'/>
            </div>
        </nav>
    );
};

export default Navbar;