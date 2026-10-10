


import React from 'react';
import MarqueeLink from './MarqueeLink';
import NavLink from './NavLink';

interface NavType {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}
const Navlinks = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories"
    );

    const data:NavType[] = await res.json();

    return (
        <div className="w-full mt-4 sm:mt-10">

            {/* Top Full Width Divider */}
            <div className="border-t border-gray-200 w-full" />

            {/* Navlinks Container */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                    <div className="flex items-center gap-2 sm:gap-3 py-3 min-w-max">
                        {data.map((n) => (
                            <NavLink
                                key={n.slug}
                                slug={n.slug}
                                icon={n.icon}
                                nameBn={n.nameBn}
                            />
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