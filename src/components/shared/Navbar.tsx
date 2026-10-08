
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo-icon.png';
import Navlinks from './Navlinks';
const Navbar = () => {
    const date = new Date().toLocaleString('bn-BD',
        { dateStyle: 'full', });
    return (<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-5">
        <div className="flex items-center justify-between gap-3">
            {/* Logo + Information */}
            <div className="flex items-center gap-2 min-w-0">
                <Image className="bg-[#05893E] p-2 rounded-xl sm:rounded-2xl shrink-0" src={logo} width={40} height={40} alt="logo" />
                <div className="min-w-0">
                    <h2 className="font-bold text-base sm:text-lg truncate"> বাজার দর </h2>
                    <p className="text-[11px] sm:text-sm text-gray-600 truncate"> {date} </p>
                </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-2 sm:gap-3 shrink-0">
                <button className="btn btn-sm sm:btn-md"> সাইন ইন </button>
                <button className="btn btn-sm sm:btn-md text-white bg-[#05893E] hover:bg-[#047a36]"> সাইন আপ </button>
            </div>
        </div>
        {/* navlinks */}
        {/* <div>
            <Navlinks></Navlinks>
        </div> */}
        {/* navlinks */}
    </div>
    );
};
export default Navbar;