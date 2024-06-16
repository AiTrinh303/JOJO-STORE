


const FilteredProductList = ({filteredProducts}) => {


  return (
 

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

  );
};

export default FilteredProductList;
