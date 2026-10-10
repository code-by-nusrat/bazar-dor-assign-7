

import React from 'react';

interface CategoryCardProps {
    product: {
        image: string;
        nameBn: string;
        unit: string;
        today: number;
        change: {
            dir: 'up' | 'down' | 'flat';
            pct: number;
        };
    };
}

const CategoryCard = ({ product }: CategoryCardProps) => {
    const price = product.today.toLocaleString('bn-BD');

    const pct = Math.abs(Number(product.change.pct));

    const formattedPct = pct.toLocaleString('bn-BD', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });

    const badgeColor =
        product.change.dir === 'up'
            ? 'bg-red-100 text-red-700'
            : product.change.dir === 'down'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-600';

    const changeLabel =
        product.change.dir === 'up'
            ? `▲ ${formattedPct}%`
            : product.change.dir === 'down'
                ? `▼ ${formattedPct}%`
                : `—${formattedPct}%`;

    return (
        <div>

            
        <div className="w-full max-w-90.5 h-34.5 border border-gray-200 rounded-xl p-2 bg-white">
            <div className="flex items-center gap-2">
                <div className="bg-gray-200 p-2 rounded-2xl">
                    <span>{product.image}</span>
                </div>

                <div>
                    <h4 className="font-bold text-[1rem]">
                        {product.nameBn}
                    </h4>

                    <p className="font-medium text-[14px] text-gray-600">
                        প্রতি {product.unit}
                    </p>
                </div>
            </div>

            <p className="text-[14px] font-medium mt-3">
                আজকের দাম
            </p>

            <div className="flex justify-between items-center gap-2">
                <h3 className="mt-1 text-[14px]">
                    <span className="text-[1.4rem] font-bold">
                        {price}
                    </span>{' '}
                    টাকা
                </h3>

                <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${badgeColor}`}
                >
                    {changeLabel}
                </span>
            </div>
        </div>
        </div>
    );
};

export default CategoryCard;
