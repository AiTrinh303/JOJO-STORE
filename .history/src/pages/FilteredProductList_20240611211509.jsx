


const FilteredProductList = ({filteredProducts}) => {


  return (
    // <div>
    //   <div className="flex justify-between items-center gap-4">
    //     <div className="relative group hidden sm:block">
    //       <input
    //         type="text"
    //         placeholder="Search ..."
    //         aria-label="Search"
    //         value={searchTerm}
    //         onChange={handleSearchChange}
    //         className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
    //       />
    //       {/* Search icon */}
    //       <SearchIcon className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
    //     </div>
    //   </div>

      {/* Display filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>New Price: ${product.new_price}</p>
            <p>Old Price: ${product.old_price}</p>
          </div>
        ))}
      </div>
    // </div>
  );
};

export default FilteredProductList;
