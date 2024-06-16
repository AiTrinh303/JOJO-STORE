// Wishlist.jsx
import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Wishlists.scss";
import ClearIcon from '@mui/icons-material/Clear';

const Wishlist = () => {
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
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div className="format-main" key={item.id}>
           
              <div className="card">
                <img src={item.image} alt="" />
                <p className="title">{item.title}</p>
                <p>${item.new_price.toFixed(2)}</p>
                <div className='remove-icon' onClick={() => removeFromWishlist(item.id)}>
                    <ClearIcon />
                </div>
                <div className="add" onClick = {()=> addToCart(item.id)}>Add</div>
              </div>
          
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;