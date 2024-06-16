import { useEffect, useState } from 'react';
import all_product from "../";

const FilteredProductList = ({ match }) => {
  const searchTerm = match.params.term;
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filterProducts = (term) => {
      const filtered = all_product.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    };

    filterProducts(searchTerm);
  }, [searchTerm]);

  return (
    <div className="filtered-product-list p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="product-info mt-4">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-500">New Price: ${product.new_price}</p>
              <p className="text-gray-400 line-through">Old Price: ${product.old_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredProductList;

  