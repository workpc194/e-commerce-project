const ProductLoadingCard = () => {
    return (
        <div id='product-card' className="h-129 w-full flex flex-col overflow-hidden rounded-2xl animate-pulse">
            {/* Image Section */}
            <div className="relative h-75 w-full shrink-0 rounded-t-2xl bg-gray-200">
                {/* In Stock Skeleton */}
                <div className="absolute top-5 left-5 h-4 w-20 rounded-[999px] bg-gray-300" />
                {/* Heart Icon Skeleton */}
                <div className="absolute top-5 right-5 h-11 w-11 rounded-full bg-gray-300" />
            </div>
            {/* Detail Section */}
            <div className="flex flex-1 flex-col gap-2 p-4.5 rounded-b-2xl">
                {/* Brand Name */}
                <div className="h-3 w-20 rounded bg-gray-300" />
                {/* Product Name */}
                <div className="flex min-h-[2.6em] flex-col gap-1">
                    <div className="h-4 w-4/5 rounded bg-gray-300" />
                    <div className="h-3 w-2/5 rounded bg-gray-300" />
                </div>
                {/* Rating */}
                <div className="flex items-center gap-3">
                    <div className="h-4 w-5 rounded bg-gray-300" />
                    <div className="h-4 w-10 rounded bg-gray-300" />
                </div>
                {/* Price */}
                <div className="h-7 w-28 rounded bg-gray-300 price" />
                {/* Add To Cart Button */}
                <div className="mt-auto h-12 w-full  rounded-xl bg-gray-300"></div>
            </div>
        </div>
    );
};

export default ProductLoadingCard