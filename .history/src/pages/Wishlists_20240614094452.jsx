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
                <p className="flex-1">Products</p>
                <p className="flex-1">Title</p>
                <p className="flex-1">Price</p>
                <p className="flex-1">Add</p>
                <p className="flex-1">Remove</p>
      </div>

      <hr className="h-1"/>

      {wishlist.length === 0 ? (
        <p className="my-2">No products in wishlist</p>
      ) : (
        console.log(wishlist),
        wishlist.map((product) => (
          <div className="format-main" key={product.id}>
           
              <div className="flex justify-start text-lg">
                <img className="flex-1 h-16 object-cover" src={product.image} alt={product.title}/>
                <p className="flex-1">{product.title}</p>
                <p>${product.new_price.toFixed(2)}</p>
                <div className='flex-1' onClick={() => removeFromWishlist(product.id)}>
                    <ClearIcon />
                </div>
                <div className="flex-1" onClick = {()=> addToCart(product.id)}>Add</div>
              </div>
   
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlists;