// Wishlist.jsx
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Wishlists.scss";
import ClearIcon from '@mui/icons-material/Clear';

const Wishlists = () => {
  const { wishlist, removeFromWishlist, addToCart } = useContext(ShopContext);

  return (
    <div className="wishlist">
      <h1>My Wishlist</h1>
      <div className="format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Add</p>
                <p>Remove</p>
      </div>

      <hr />

      {wishlist.length === 0 ? (
        <p>No products in wishlist</p>
      ) : (
        wishlist.map((product) => (
          <div className="format-main" key={product.id}>
           
              <div className="card">
                <img src={product.image} alt={product.title} />
                <p className="title">{product.title}</p>
                <p>${product.new_price.toFixed(2)}</p>
                <div className='remove-icon' onClick={() => removeFromWishlist(product.id)}>
                    <ClearIcon />
                </div>
                <div className="add" onClick = {()=> addToCart(product.id)}>Add</div>
              </div>
          
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlists;