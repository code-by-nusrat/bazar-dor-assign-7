import React from 'react';


const ProductSkeleton = () => {
    return (
        <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            {/* Product image */}
            <div className="mb-4 h-40 rounded-lg bg-gray-200" />

            {/* Product name */}
            <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />

            {/* Unit */}
            <div className="mb-4 h-4 w-1/2 rounded bg-gray-200" />

            {/* Price */}
            <div className="mb-3 h-6 w-2/3 rounded bg-gray-200" />

            {/* Price change */}
            <div className="h-4 w-1/3 rounded bg-gray-200" />
        </div>
    );
};

export default ProductSkeleton;
