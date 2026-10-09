import CategoryCard from '@/components/cardStyle/CategoryCard';
import React from 'react';

const CategoryNews =async ({params}) => {
    const {categoryId}=await params;
    const res =await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`)
    const data =await res.json()
    console.log(data,'data')
    const firstData=data[0]
    const dataLength=data.length
    //console.log(firstData,'firstData')
  //const categoryProduct
    return (
        <div className='bg-base-200'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 '>
            <div className='w-full border rounded-2xl p-3'>
                <div className='flex  items-center gap-2'>
                <div><h2>{firstData.image}</h2></div>
                <div>
                    <h2 className='text-[1.2rem] font-bold'>{firstData.nameBn}</h2>
                    <p className=''>{dataLength} পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
                </div>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {data.map((product)=>(
                <div key={product.id}>
                   <CategoryCard product={product}></CategoryCard>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default CategoryNews;