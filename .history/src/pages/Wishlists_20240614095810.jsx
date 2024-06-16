// Wishlist.jsx
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import ClearIcon from '@mui/icons-material/Clear';

const Wishlists = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(ShopContext);

  return (
    <div className="mx-44 my-28">
      <h1>My Wishlist</h1>
      <div className="flex justify-start my-8 font-medium">
                <p className="mr-64">Products</p>
                <p className="mr-64">Title</p>
                <p className="mr-64">Price</p>
                <p className="mr-64">Add</p>
                <p className="mr-48">Remove</p>
      </div>

      <hr className="h-1"/>

      {wishlist.length === 0 ? (
        <p className="my-2">No products in wishlist</p>
      ) : (
        console.log(wishlist),
        wishlist.map((product) => (
          <div className="flex flex justify-start" key={product.id}>
           
              <div className="flex justify-start text-lg">
                <img className="h-16 mr-64 object-cover w-16 overflow-hidden" src={product.image} alt={product.title}/>
                <p className="mr-52">{product.title}</p>
                <p className="mr-48">${product.new_price.toFixed(2)}</p>
                <div className="mr-64" onClick = {()=> addToCart(product.id)}>
                    Add
                </div>
                <div className='mr-64' onClick={() => removeFromWishlist(product.id)}>
                    <ClearIcon />
                </div>
              </div>
   
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlists;