import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ShopContext } from "../../Context/ShopContext";
import 'tailwindcss/tailwind.css';

const Card = (props) => {
  const [iconColor, setIconColor] = useState("");
  const { addToWishlist } = useContext(ShopContext);

  const handleImgClick = () => {
    window.scrollTo(0, 0);
  };

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    setIconColor("red");
    addToWishlist({
      id: props.id,
      image: props.image,
      title: props.title,
      new_price: props.new_price,
      old_price: props.old_price,
    });
  };

  return (
    <Link className="link" to={`/product/${props.id}`}>
      <div className="w-[280px] flex flex-col gap-2.5 mb-12 hover:scale-105 transition-transform duration-600">
        <div className="relative w-full h-[400px] overflow-hidden">
          <img
            onClick={handleImgClick}
            src={props.image}
            alt={props.title}
            className="absolute w-full h-full object-cover"
          />
          <div
            className="absolute top-0 right-0 z-10 p-2 text-gray-500 bg-transparent"
            onClick={handleFavoriteClick}
            style={{ color: iconColor }}
          >
            <FavoriteBorderIcon />
          </div>
        </div>
        <h2 className="text-lg font-normal">{props.title}</h2>
        <div className="flex gap-5">
          <div className="text-lg font-semibold text-gray-800">${props.new_price}</div>
          <div className="text-lg line-through text-gray-500">${props.old_price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
