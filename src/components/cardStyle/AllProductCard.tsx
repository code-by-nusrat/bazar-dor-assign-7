import Image from 'next/image';
import React from 'react';

const AllProductCard = ({ product }) => {
    return (
        <div className='w-90 h-38 border p-6 rounded-2xl bg-white border-gray-300'>
            <div className='flex items-center gap-2'>
                <div className='bg-gray-300 p-2 rounded-2xl'>
                    <h3 >{product.image}</h3>
                </div>
                <div>
                    <h3 className='font-semibold text-[1rem]'>{product.nameBn}</h3>
                    <p className='text-[14px] font-medium text-gray-600'>প্রতি {product.unit}</p>
                </div>

            </div>
            <p className='mt-2 font-medium'>আজকের দাম</p>
            <div className='flex justify-between items-center'>
                <h3 className='text-[14px]'><span className='font-bold text-[1.4rem] mr-2'>{product.today}</span>টাকা</h3>
                <h3 className=' p-1 rounded-2xl bg-gray-200  font-bold'>
                <p className={`ml-2 ${product.change.dir === "down"
                            ? "text-red-500"
                            : product.change.dir === "up"
                                ? "text-green-600"
                                : "text-gray-500"
                            }`}
                    >
                        {product.change.dir === "down"
                            ? "▲"
                            : product.change.dir === "up"
                                ? "▼"
                                : "—"}{" "}
                        {product.change.pct}%
                    
                </p>
                </h3>
            </div>
        </div>
    );
};

export default AllProductCard;