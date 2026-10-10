
import React from 'react';
import bannerPic from '@/assets/bazar-hero.png';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    const date = new Date().toLocaleString('bn-BD', {
        dateStyle: 'full',
    });

    return (
        <div className="w-full">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 lg:mb-10">
                <div className="hero bg-white rounded-xl sm:rounded-2xl">
                    <div className="hero-content w-full flex-col lg:flex-row-reverse justify-between gap-6 lg:gap-10 p-5 sm:p-8 lg:p-10">

                        {/* Image */}
                        <div className="w-full lg:w-auto flex justify-center shrink-0">
                            <Image
                                src={bannerPic}
                                alt="banner"
                                width={315}
                                height={263}
                                className="w-52 sm:w-64 lg:w-78.75 h-auto"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full text-center lg:text-left">
                            <button className="px-3 py-2 text-xs sm:text-sm lg:text-base bg-green-200 text-[#05893E] font-semibold rounded-xl sm:rounded-2xl">
                                {date}
                            </button>

                            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-[2.4rem] leading-tight font-bold">
                                আজকের বাজারের দাম এক নজরে
                            </h1>

                            <p className="py-4 sm:py-5 lg:py-6 text-sm sm:text-base text-gray-600 font-medium leading-7">
                                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                                বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                                দামের পরিবর্তন এক জায়গায়।
                            </p>

                            {/* <button  className="btn bg-[#05893E] text-white border-none hover:bg-[#047a36]">
                                সব পণ্য দেখুন
                            </button> */}
                            <a href="#সব-পণ্য"> <button className="btn bg-[#05893E] text-white border-none hover:bg-[#047a36]">
                                সব পণ্য দেখুন
                            </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

