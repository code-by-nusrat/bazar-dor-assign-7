import React from 'react';
 interface LeastProductTypt{
    image: React.ReactNode;
    nameBn: string;
    unit: string;
    today: string | number;
    change: {
        dir: "down" | "up" | "same";
        pct: string | number;
    };
 }
const LeastProduct = ({ leastProduct }: { leastProduct: LeastProductTypt }) => {
    return (
        <div>
            <div className='w-90 h-38 border p-6 rounded-2xl bg-white border-gray-300'>
                <div className='flex items-center gap-2'>
                    <div className='bg-gray-300 p-2 rounded-2xl'>
                        <h3 >{leastProduct.image}</h3>
                    </div>
                    <div>
                        <h3 className='font-semibold text-[1rem]'>{leastProduct.nameBn}</h3>
                        <p className='text-[14px] font-medium text-gray-600'>প্রতি {leastProduct.unit}</p>
                    </div>

                </div>
                <p className='mt-2 font-medium'>আজকের দাম</p>
                <div className='flex justify-between items-center'>
                    <h3 className='text-[14px]'><span className='font-bold text-[1.4rem] mr-2'>{leastProduct.today}</span>টাকা</h3>
                    <h3 className=' p-1 rounded-2xl bg-gray-200  font-bold'>
                        <p className={`ml-2 ${leastProduct.change.dir === "down"
                            ? "text-red-500"
                            : leastProduct.change.dir === "up"
                                ? "text-green-600"
                                : "text-gray-500"
                            }`}
                        >
                            {leastProduct.change.dir === "down"
                                ? "▲"
                                : leastProduct.change.dir === "up"
                                    ? "▼"
                                    : "—"}{" "}
                            {leastProduct.change.pct}%

                        </p>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default LeastProduct;