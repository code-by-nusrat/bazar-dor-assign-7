
import Link from 'next/link';
import React from 'react';
import MarqueeLink from './MarqueeLink';

interface NavType {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}
const Navlinks = async () => {
    const res = await fetch(
        'https://api.abcz.workers.dev/api/bazardor/categories'
    );

    const data:NavType[] = await res.json();

    console.log()
    return (
        <div className="w-full mt-4 sm:mt-10">

            {/* Top Full Width Divider */}
            <div className="border-t border-gray-200 w-full" />

            {/* Navlinks Container */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                    <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 py-4 min-w-max">
                        {data.map((n, index: number) => (
                            <Link
                                key={index}
                                href={`/category/${n.slug}`}
                                className="flex items-center gap-1.5 text-sm sm:text-base"
                            >
                                <span>{n.icon}</span>
                                <span>{n.nameBn}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Full Width Divider */}
            <div className="border-b border-gray-200 w-full" />
            
            {/* marquee */}
            <div>
                <MarqueeLink></MarqueeLink>
            </div>
             <div className="border-b border-gray-200 w-full " />
        </div>
    );
};

export default Navlinks;
