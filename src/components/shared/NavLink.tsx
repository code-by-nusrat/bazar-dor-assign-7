'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    slug: string;
    icon: string;
    nameBn: string;
}

const NavLink = ({ slug, icon, nameBn }: NavLinkProps) => {
    const pathname = usePathname();
    const active = pathname === `/category/${slug}`;

    return (
        <Link
            href={`/category/${slug}`}
            aria-current={active ? 'page' : undefined}
            className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm transition-colors sm:text-base ${
                active
                    ? 'bg-green-700 font-medium text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
            }`}
        >
            <span>{icon}</span>
            <span>{nameBn}</span>
        </Link>
    );
};

export default NavLink;