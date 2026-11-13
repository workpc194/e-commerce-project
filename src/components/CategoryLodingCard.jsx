const CategoryLoadingCard = () => {
    return (
        <div id="category-card" className="h-111 w-full overflow-hidden rounded-2xl animate-pulse">

            {/* Image Section */}
            <div className="h-94 w-full bg-gray-200 rounded-t-2xl" />

            <hr className='text-[#E8E4DC]' />
            {/* Details Section */}
            <div className="flex items-center justify-between p-4.5">

                {/* Category Name */}
                <div className="h-6 w-32 rounded bg-gray-300" />

                {/* Arrow Circle */}
                <div className="h-8 w-8 shrink-0 rounded-full bg-gray-300" />

            </div>

        </div>
    );
};

export default CategoryLoadingCard