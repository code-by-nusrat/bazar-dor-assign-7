
import CategoryCard from '@/components/cardStyle/CategoryCard';
import React from 'react';

interface Product {
    id: string;
    category: string;
    image: string;
    nameBn: string;
    unit: string;
    today: number;
    change: {
        dir: 'up' | 'down' | 'flat';
        pct: number;
    };
}

const CategoryNews = async ({
    params,
}: {
    params: Promise<{ categoryId: string }>;
}) => {
    const { categoryId } = await params;

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`
    );

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    const data: Product[] = await res.json();

    const categoryNames: Record<string, string> = {
        chal: 'চাল',
        dal: 'ডাল',
        tel: 'তেল',
        mach: 'মাছ',
        mangsho: 'মাংস',
        sobji: 'সবজি',
        fol: 'ফল',
        moshla: 'মসলা',
    };

    const categoryNameBn =
        categoryNames[categoryId] ?? categoryId;

    const firstDataImage = data[0]?.image;
    const dataLength = data.length;

    return (
        <main className="min-h-screen bg-base-200">
            <div className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-5 sm:py-6 lg:px-8">

                {/* Category header */}
                <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-6">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl sm:size-14 sm:text-3xl">
                            {firstDataImage || '🛒'}
                        </div>

                        <div className="min-w-0">
                            <h1 className="text-lg font-bold sm:text-xl md:text-2xl">
                                {categoryNameBn}
                            </h1>

                            <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                                {dataLength} পণ্যের আজকের দাম ও পরিবর্তন
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sorting section */}
                <section className="mt-4 flex flex-wrap justify-end gap-3 rounded-2xl border border-gray-200 bg-white p-3 sm:mt-5 sm:p-4">
                    

                    <div className="flex justify-end gap-4">
                        <div>
                        <label
                            htmlFor="sort-products"
                            className="shrink-0 text-sm text-gray-500"
                        >
                            সাজান
                        </label>
                            </div>
                          <div>
                        <select
                            id="sort-products"
                            defaultValue="default"
                            className="select select-bordered  w-36 max-w-full sm:select-md sm:w-44"
                        >
                            <option value="default">ডিফল্ট</option>
                            <option value="price-low">কম দাম</option>
                            <option value="price-high">বেশি দাম</option>
                            <option value="name">নাম অনুযায়ী</option>
                        </select>
                        </div>
                    </div>
                </section>

                {/* Product count */}
                <div className="py-4">
                    <p className="text-sm font-medium text-gray-600 sm:text-base">
                        মোট {dataLength} টি পণ্য দেখানো হচ্ছে
                    </p>
                </div>

                {/* Product grid */}
                {dataLength > 0 ? (
                    <div className="grid grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 sm:justify-items-stretch sm:gap-4 lg:grid-cols-3 lg:gap-5">
                        {data.map((product) => (
                            <CategoryCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
                        <p className="text-gray-600">
                            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default CategoryNews;