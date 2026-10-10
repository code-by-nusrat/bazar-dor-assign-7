
import CategoryCard from '@/components/cardStyle/CategoryCard';
import Link from 'next/link';
import React from 'react';

interface Product {
    id: string;
    slug: string;
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

interface Category {
    slug: string;
    nameBn: string;
}

type SortKey = 'default' | 'price-low' | 'price-high' | 'name';

const CategoryNews = async ({
    params,
    searchParams,
}: {
    params: Promise<{ categoryId: string }>;
    searchParams: Promise<{ sort?: string }>;
}) => {
    const { categoryId } = await params;
    const { sort } = await searchParams;

    const [productsRes, categoriesRes] = await Promise.all([
        fetch(
            `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
        ),
        fetch(`https://openapi.programming-hero.com/api/bazardor/products`),
    ]);

    if (!productsRes.ok) {
        throw new Error('Failed to fetch products');
    }

    const data: Product[] = await productsRes.json();
    const categories: Category[] = categoriesRes.ok
        ? await categoriesRes.json()
        : [];

    const categoryNameBn =
        categories.find((c) => c.slug === categoryId)?.nameBn ?? categoryId;

    // sorting: কম দাম / বেশি দাম / নাম অনুযায়ী
    const sortKey: SortKey =
        sort === 'price-low' || sort === 'price-high' || sort === 'name'
            ? sort
            : 'default';

    const products = [...data].sort((a, b) => {
        switch (sortKey) {
            case 'price-low':
                return a.today - b.today;
            case 'price-high':
                return b.today - a.today;
            case 'name':
                return a.nameBn.localeCompare(b.nameBn, 'bn');
            default:
                return 0;
        }
    });

    const firstDataImage = data[0]?.image;
    const dataLength = data.length;
    const countBn = dataLength.toLocaleString('bn-BD');

    return (
        <main className="min-h-screen bg-base-200">
            <div>
                <div className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-5 sm:py-6 lg:px-8">
                    {/* Category header */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 md:p-6">
                        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl sm:size-14 sm:text-3xl">
                                {firstDataImage}
                            </div>

                            <div className="min-w-0">
                                <h1 className="text-lg font-bold sm:text-xl md:text-2xl">
                                    {categoryNameBn}
                                </h1>

                                <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                                    {countBn}টি পণ্যের আজকের দাম ও পরিবর্তন
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sorting section */}
                    <section className="mt-4 rounded-2xl border border-gray-200 bg-white p-3 sm:mt-5 sm:p-4">
                        <form className="flex flex-wrap items-center justify-end gap-3">
                            <label
                                htmlFor="sort-products"
                                className="shrink-0 text-sm text-gray-500"
                            >
                                সাজান
                            </label>

                            <select
                                id="sort-products"
                                name="sort"
                                defaultValue={sortKey}
                                className="select select-bordered w-36 max-w-full sm:select-md sm:w-44"
                            >
                                <option value="default">ডিফল্ট</option>
                                <option value="price-low">কম দাম</option>
                                <option value="price-high">বেশি দাম</option>
                                <option value="name">নাম অনুযায়ী</option>
                            </select>

                            <button
                                type="submit"
                                className="rounded-lg bg-[#05893E] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#047535]"
                            >
                                প্রয়োগ
                            </button>
                        </form>
                    </section>

                    {/* Product count */}
                    <div className="py-4">
                        <p className="text-sm font-medium text-gray-600 sm:text-base">
                            মোট {countBn}টি পণ্য দেখানো হচ্ছে
                        </p>
                    </div>

                    {/* Product grid */}
                    {dataLength > 0 ? (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                            {products.map((product) => (
                                <CategoryCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
                            <p className="text-gray-600">
                                এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                            </p>
                        </div>
                    )}
                </div>

                <Link href="/">
                    <h2 className="mb-0 mt-20 text-center text-gray-600">
                        ← হোম পেজে ফিরে যান
                    </h2>
                </Link>
            </div>
        </main>
    );
};

export default CategoryNews;