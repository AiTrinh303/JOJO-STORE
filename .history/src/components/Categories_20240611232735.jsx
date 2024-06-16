
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex h-screen gap-10 m-10">
      <div className="flex flex-col flex-1 gap-10">
        <div className="flex-1 flex gap-10 relative">
          <img
            src="https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 m-auto px-10 py-2 text-white bg-white border border-gray-300 hover:bg-blue-500 hover:text-white">
            <Link className="link uppercase font-semibold" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="flex-1 flex gap-10 relative">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 m-auto px-10 py-2 text-white bg-white border border-gray-300 hover:bg-blue-500 hover:text-white">
            <Link to="/women" className="link uppercase font-semibold">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-10">
        <div className="flex-1 flex gap-10 relative">
          <img
            src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 m-auto px-10 py-2 text-white bg-white border border-gray-300 hover:bg-blue-500 hover:text-white">
            <Link to="/products/1" className="link uppercase font-semibold">
              New Season
            </Link>
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-10 relative">
          <div className="flex-1 flex gap-10">
            <img
              src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 m-auto px-10 py-2 text-white bg-white border border-gray-300 hover:bg-blue-500 hover:text-white">
              <Link to="/men" className="link uppercase font-semibold">
                Men
              </Link>
            </button>
          </div>
          <div className="flex-1 flex gap-10 relative">
            <img
              src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 m-auto px-10 py-2 text-white bg-white border border-gray-300 hover:bg-blue-500 hover:text-white">
              <Link to="/products/1" className="link uppercase font-semibold">
                Shoes
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-1 flex gap-10 relative">
          <img
            src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 m-auto px-10 py-2 text-white bg-white border border-gray-300 hover:bg-blue-500 hover:text-white">
            <Link to="/products/1" className="link uppercase font-semibold">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
