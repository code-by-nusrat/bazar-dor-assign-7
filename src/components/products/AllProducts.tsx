import React from 'react';
import AllProductCard from '../cardStyle/AllProductCard';
import TopProduct from '../cardStyle/TopProduct';
import LeastProduct from '../cardStyle/LeastProduct';

interface ProductChange {
    dir: 'up' | 'down';
    pct: number;
}

interface Product {
    change: ProductChange;
    image: string;
    nameBn: string;
    unit: string;
    today: number;
    [key: string]: unknown;
}

const getProducts = async (): Promise<Product[]> => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data: Product[] = await res.json();
    return data;
};

const AllProducts = async (): Promise<React.JSX.Element> => {
    const productsData: Product[] = await getProducts();

    console.log(productsData, 'productsData');
    const filterdHighPrice: Product[] = productsData.filter((hp: Product): boolean => hp.change.dir === 'up');
    const sortHighPrice: Product[] = [...filterdHighPrice].sort((a: Product, b: Product): number => b.change.pct - a.change.pct).slice(0, 6);
    const filteredLeastPrice: Product[] = productsData.filter((lp: Product): boolean => lp.change.dir === 'down');
    const sortLeastPrice: Product[] = [...filteredLeastPrice].sort((a: Product, b: Product): number => a.change.pct - b.change.pct).slice(0, 6);

    console.log(sortHighPrice, 'filterdHighPrice');
    return (
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 '>
            {/*price increase  */}
            <div>
                <h1 className='text-[1.2rem] font-bold mb-5'><span className='text-red-600 mr-2'>▲</span> আজ দাম বেড়েছে</h1>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 rounded-2xl gap-3'>
                    {
                        sortHighPrice.map((topProduct: Product, index: number): React.JSX.Element => (
                            <div key={index}>
                                 <TopProduct topProduct={topProduct}></TopProduct>
                            </div>
                        ))
                    }
                </div>

            </div>
            {/*price increase   */}

            {/* price decreas */}
            <div>
                <h1 className='text-[1.2rem] font-bold mt-12 mb-5'><span className='text-green-600'>▼</span>আজ দাম কমেছে</h1>
                <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 rounded-2xl '>
                       {
                        sortLeastPrice.map((leastProduct: Product, index: number): React.JSX.Element => (
                            <div key={index}>
                                 <LeastProduct leastProduct={leastProduct}></LeastProduct>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* price decrease */}

            {/* all product */}
            <div>
                <h1 className='text-[1.2rem] font-bold mt-12 mb-3'>সব পণ্য</h1>
                <p className='mb-3 font-medium text-gray-600'>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
                <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 rounded-2xl '>
                    {
                       productsData.map((product: Product, index: number): React.JSX.Element => (
                        <div key={index}>
                             <AllProductCard product={product}></AllProductCard>
                        </div>
                       )) 
                    }
                </div>
            </div>
            {/* all product */}
        </div>
    );
};

export default AllProducts;