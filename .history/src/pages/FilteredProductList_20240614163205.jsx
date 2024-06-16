import 
{ useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import all_product from "../assets/all_product"; 
import Card from "../components/Card";

const FilteredProductList = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
    filterProducts(event.target.value); 
  };

  
  const filterProducts = (term) => {
    const filtered = all_product.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered); 
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <div className="relative group hidden sm:block">
          <input
            type="text"
            placeholder="Search ..."
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
          />
          {/* Search icon */}
          <SearchIcon className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 items-center" />
        </div>
      </div>

      {/* Display filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((item, i) => (
          <Card
            key={i}
            id={item.id}
            title={item.title}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default FilteredProductList;
