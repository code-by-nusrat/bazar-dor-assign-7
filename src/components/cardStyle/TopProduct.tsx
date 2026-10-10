
import Link from 'next/link';
import React from 'react';

interface TopProductType {
    slug: string;
    image: React.ReactNode;
    nameBn: string;
    unit: string;
    today: string | number;
    change: {
        dir: 'up' | 'down' | 'same';
        pct: string | number;
    };
}

interface TopProductProps {
    topProduct: TopProductType;
}

const TopProduct = ({ topProduct }: TopProductProps) => {
    const { slug, image, nameBn, unit, today, change } = topProduct;

    const changeColor =
        change.dir === 'up'
            ? 'text-red-500'
            : change.dir === 'down'
              ? 'text-green-600'
              : 'text-gray-500';

    const changeIcon =
        change.dir === 'up'
            ? '▲'
            : change.dir === 'down'
              ? '▼'
              : '—';

    return (
        <Link
            href={`/${slug}`}
            className="block w-full min-w-0 rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md sm:p-5 lg:p-6"
        >
            {/* Product information */}
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl sm:h-14 sm:w-14">
                    {image}
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-semibold sm:text-lg">
                        {nameBn}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-gray-500">
                        প্রতি {unit}
                    </p>
                </div>
            </div>

            {/* Today's price */}
            <p className="mt-4 text-sm font-medium text-gray-600">
                আজকের দাম
            </p>

            <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm">
                    <span className="mr-1 text-xl font-bold sm:text-2xl">
                        {today}
                    </span>
                    টাকা
                </p>

                {/* Price change */}
                <span
                    className={`rounded-xl bg-gray-100 px-2 py-1 text-xs font-bold sm:text-sm ${changeColor}`}
                >
                    {changeIcon} {change.pct}%
                </span>
            </div>
        </Link>
    );
};

export default TopProduct;
