import React from 'react';

const CategoryNews =async ({params}) => {
    const {categoryId}=await params;
    console.log(categoryId,'categoryId')
    return (
        <div>
            CategoryNews
        </div>
    );
};

export default CategoryNews;