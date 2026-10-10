



import Link from 'next/link';
import React from 'react';

type Product = {
    slug: string;
    image: React.ReactNode;
    nameBn: string;
    unit: string;
    today: number | string;
    change: {
        dir: 'down' | 'up' | 'same';
        pct: number | string;
    };
};

interface AllProductCardProps {
    productsData: Product[];
}

const AllProductCard = ({
    productsData,
}: AllProductCardProps) => {
    return (
        <section
            id="সব-পণ্য"
            className="mx-auto w-full max-w-7xl scroll-mt-6 px-3 sm:px-5 lg:px-8"
        >
            <h1 className="mt-12 mb-3 text-xl font-bold">
                সব পণ্য
            </h1>

            <p className="mb-4 font-medium text-gray-600">
                মোট {productsData.length}টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {productsData.map((product) => (
                    <Link
                        key={product.slug}
                        href={`/${product.slug}`}
                        className="block min-w-0 rounded-2xl border border-gray-200 bg-white p-4 transition hover:shadow-md sm:p-5"
                    >
                        {/* Product information */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                                {product.image}
                            </div>

                            <div className="min-w-0">
                                <h3 className="truncate font-semibold text-base">
                                    {product.nameBn}
                                </h3>

                                <p className="text-sm font-medium text-gray-600">
                                    প্রতি {product.unit}
                                </p>
                            </div>
                        </div>

                        {/* Today's price */}
                        <p className="mt-3 font-medium">
                            আজকের দাম
                        </p>

                        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                            <p className="text-sm">
                                <span className="mr-2 text-2xl font-bold">
                                    {product.today}
                                </span>
                                টাকা
                            </p>

                            {/* Price change */}
                            <span
                                className={`rounded-xl bg-gray-100 px-3 py-1 text-sm font-bold ${
                                    product.change.dir === 'up'
                                        ? 'text-red-500'
                                        : product.change.dir === 'down'
                                          ? 'text-green-600'
                                          : 'text-gray-500'
                                }`}
                            >
                                {product.change.dir === 'up'
                                    ? '▲'
                                    : product.change.dir === 'down'
                                      ? '▼'
                                      : '—'}{' '}
                                {product.change.pct}%
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default AllProductCard;
