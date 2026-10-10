
import Link from 'next/link';
import React from 'react';

interface LeastProductType {
    image: React.ReactNode;
    slug: string;
    nameBn: string;
    unit: string;
    today: string | number;
    change: {
        dir: 'down' | 'up' | 'same';
        pct: string | number;
    };
}

interface LeastProductProps {
    leastProduct: LeastProductType;
}

const LeastProduct = ({ leastProduct }: LeastProductProps) => {
    const { image, slug, nameBn, unit, today, change } = leastProduct;

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
            className="block rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-md"
        >
            {/* Product information */}
            <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gray-100 p-3">
                    <span>{image}</span>
                </div>

                <div>
                    <h3 className="font-semibold text-base">
                        {nameBn}
                    </h3>

                    <p className="text-sm font-medium text-gray-600">
                        প্রতি {unit}
                    </p>
                </div>
            </div>

            {/* Today's price */}
            <p className="mt-3 font-medium">
                আজকের দাম
            </p>

            <div className="flex items-center justify-between gap-2">
                <p className="text-sm">
                    <span className="mr-2 text-2xl font-bold">
                        {today}
                    </span>
                    টাকা
                </p>

                {/* Price change */}
                <span
                    className={`rounded-xl bg-gray-100 px-3 py-1 text-sm font-bold ${changeColor}`}
                >
                    {changeIcon} {change.pct}%
                </span>
            </div>
        </Link>
    );
};

export default LeastProduct;
