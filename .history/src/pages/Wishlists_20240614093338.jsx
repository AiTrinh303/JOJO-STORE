// Wishlist.jsx
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import ClearIcon from '@mui/icons-material/Clear';

const Wishlists = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(ShopContext);

  return (
    <div className="mx-44 my-28">
      <h1>My Wishlist</h1>
      <div className="flex justify-start ">
                <p className="flex-1">Products</p>
                <p className="flex-1">Title</p>
                <p className="flex-1">Price</p>
                <p className="flex-1">Add</p>
                <p className="flex-1">Remove</p>
      </div>

      <hr />

      {wishlist.length === 0 ? (
        <p>No products in wishlist</p>
      ) : (
        console.log(wishlist),
        wishlist.map((product) => (
          <div className="format-main" key={product.id}>
           
              <div className="card">
                <img src={product.image} alt={product.title}/>
                <p className="title">{product.title}</p>
                <p>${product.new_price.toFixed(2)}</p>
                <div className='remove-icon' onClick={() => removeFromWishlist(product.id)}>
                    <ClearIcon />
                </div>
                <div className="add" onClick = {()=> addToCart(product.id)}>Add</div>
              </div>
   
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlists;