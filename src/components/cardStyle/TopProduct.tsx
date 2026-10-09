import React from 'react';
// interface TopProductType {
//     image: string,
//     categoryIcon: string,
//     nameBn: string,
//     unit: string,
//     today: React.ReactNode,
//     change: { dir: string; pct: string | number }
// }
const TopProduct = ({ topProduct }) => {
    return (
        <div className='w-90 h-38 border p-6 rounded-2xl bg-white border-gray-300'>
            <div className='flex items-center gap-2'>
                <div className='bg-gray-300 p-2 rounded-2xl'>
                    <h3 >{topProduct.image}</h3>
                </div>
                <div>
                    <h3 className='font-semibold text-[1rem]'>{topProduct.nameBn}</h3>
                    <p className='text-[14px] font-medium text-gray-600'>প্রতি {topProduct.unit}</p>
                </div>

            </div>
            <p className='mt-2 font-medium'>আজকের দাম</p>
            <div className='flex justify-between items-center'>
                <h3 className='text-[14px]'><span className='font-bold text-[1.4rem] mr-2'>{topProduct.today}</span>টাকা</h3>
                <h3 className=' p-1 rounded-2xl bg-gray-200  font-bold'>
                    <p className={`ml-2 ${topProduct.change.dir === "down"
                        ? "text-red-500"
                        : topProduct.change.dir === "up"
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                    >
                        {topProduct.change.dir === "down"
                            ? "▲"
                            : topProduct.change.dir === "up"
                                ? "▼"
                                : "—"}{" "}
                        {topProduct.change.pct}%

                    </p>
                </h3>
            </div>
        </div>
    );
};

export default TopProduct;