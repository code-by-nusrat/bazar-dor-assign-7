
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface IMarket {
    market: string;
    division: string;
    min: number;
    max: number;
}

interface IProduct {
    slug: string;
    image: string;
    nameBn: string;
    category: string;
    unit: string;
    today: number;
    yesterday: number;
    change: { dir: 'up' | 'down' | 'flat'; pct: number };
    markets: IMarket[];
}

interface IProductDetailsPage {
    params: Promise<{
        slug: string;
    }>;
}

const UNIT_BN: Record<string, string> = {
    kg: 'কেজি',
    litre: 'লিটার',
    dozen: 'ডজন',
    piece: 'পিস',
};

const CATEGORY_BN: Record<string, string> = {
    chal: 'চাল',
    dal: 'ডাল',
    tel: 'তেল',
    sobji: 'সবজি',
    mach: 'মাছ',
    mangsho: 'মাংস',
    'dim-dui': 'ডিম-দুধ',
    mosla: 'মসলা',
};

// Bengali digits; whole numbers plain, halves as ৬৩.৫০
const bn = (n: number) =>
    Number.isInteger(n)
        ? n.toLocaleString('bn-BD')
        : n.toLocaleString('bn-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const getProducts = async (): Promise<IProduct[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    const data: IProduct[] = await res.json();
    return data;
};

const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
    const isUrl = /^(https?:)?\//.test(src);
    return (
        <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-3xl sm:size-20">
            {isUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={alt} className="size-full rounded-xl object-cover" />
            ) : (
                <span aria-hidden>{src}</span>
            )}
        </div>
    );
};

const ProductDetailsPage = async ({ params }: IProductDetailsPage) => {
    const { slug } = await params;
    const productData = await getProducts();
    const product = productData.find((pro: IProduct) => pro.slug === slug);

    if (!product) {
        notFound();
    }

    const unit = UNIT_BN[product.unit] ?? product.unit;
    const categoryName = CATEGORY_BN[product.category] ?? product.category;

    const diff = Math.abs(product.today - product.yesterday);
    const { dir, pct } = product.change;

    const trend =
        dir === 'up'
            ? { word: 'বাড়ছে', color: 'text-red-600', arrow: '▲' }
            : dir === 'down'
              ? { word: 'কমছে', color: 'text-green-600', arrow: '▼' }
              : { word: 'অপরিবর্তিত', color: 'text-gray-500', arrow: '–' };

    const rows = product.markets
        .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
        .sort((a, b) => a.avg - b.avg);

    const lowest = Math.min(...product.markets.map((m) => m.min));
    const highest = Math.max(...product.markets.map((m) => m.max));

    return (
        <div className="mx-auto w-full max-w-7xl px-3 py-5 sm:px-5 sm:py-6 lg:px-8">
            {/* breadcrumb */}
            <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                <Link href="/" className="hover:underline">
                    হোম
                </Link>
                <span>&gt;</span>
                <Link href={`/category/${product.category}`} className="hover:underline">
                    {categoryName}
                </Link>
                <span>&gt;</span>
                <span className="font-medium text-gray-900">{product.nameBn}</span>
            </nav>

            {/* header card */}
            <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex items-center gap-4">
                    <ProductImage src={product.image} alt={product.nameBn} />
                    <div>
                        <h1 className="text-2xl font-bold sm:text-3xl">{product.nameBn}</h1>
                        <p className="text-xs text-gray-500">
                            প্রতি {unit} · {categoryName}
                        </p>
                        <p className="mt-1 text-xs text-gray-700">
                            গতকালের তুলনায় আজ দাম <b className={trend.color}>{trend.word}</b>
                            {dir !== 'flat' && <> · {bn(diff)} টাকা</>}
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl bg-gray-100 px-6 py-3 text-center sm:min-w-40">
                    <p className="text-xs text-gray-500">আজকের দাম</p>
                    <p className="text-4xl font-bold">{bn(product.today)}</p>
                    <p className="text-xs text-gray-500">টাকা / {unit}</p>
                    <p className={`mt-1 text-xs font-semibold ${trend.color}`}>
                        {trend.arrow} {Math.abs(pct).toLocaleString('bn-BD')}%
                    </p>
                </div>
            </section>

            {/* summary + table card */}
            <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
                <h2 className="mb-4 text-lg font-bold">দামের সারসংক্ষেপ</h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-gray-200 p-4">
                        <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
                        <p className="mt-1 text-green-600">
                            <span className="text-2xl font-bold">{bn(lowest)}</span>{' '}
                            <span className="text-sm">টাকা</span>
                        </p>
                        <p className="mt-1 text-xs text-gray-500">সবচেয়ে কম দামের বাজার</p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-4">
                        <p className="text-xs text-gray-500">সর্বাধিক দাম</p>
                        <p className="mt-1 text-red-600">
                            <span className="text-2xl font-bold">{bn(highest)}</span>{' '}
                            <span className="text-sm">টাকা</span>
                        </p>
                        <p className="mt-1 text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-4">
                        <p className="text-xs text-gray-500">গড় দাম</p>
                        <p className="mt-1 text-green-600">
                            <span className="text-2xl font-bold">{bn(product.today)}</span>{' '}
                            <span className="text-sm">টাকা</span>
                        </p>
                        <p className="mt-1 text-xs text-gray-500">প্রতি {unit}-এর হিসাবে</p>
                    </div>
                </div>

                <h2 className="mb-3 mt-8 text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>

                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full min-w-[640px] text-sm">
                        <thead>
                            <tr className="text-xs text-gray-500">
                                <th className="px-4 py-3 text-left font-normal">বাজার</th>
                                <th className="px-4 py-3 text-left font-normal">বিভাগ</th>
                                <th className="px-4 py-3 text-right font-normal">সর্বনিম্ন</th>
                                <th className="px-4 py-3 text-right font-normal">সর্বাধিক</th>
                                <th className="px-4 py-3 text-right font-normal">গড়</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr
                                    key={`${row.market}-${row.division}`}
                                    className="border-t border-gray-200 odd:bg-gray-50"
                                >
                                    <td className="px-4 py-3 font-semibold">{row.market}</td>
                                    <td className="px-4 py-3 text-gray-700">{row.division}</td>
                                    <td className="px-4 py-3 text-right text-gray-600">
                                        {bn(row.min)} টাকা
                                    </td>
                                    <td className="px-4 py-3 text-right text-gray-600">
                                        {bn(row.max)} টাকা
                                    </td>
                                    <td className="px-4 py-3 text-right font-bold">
                                        {bn(row.avg)} টাকা
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailsPage;