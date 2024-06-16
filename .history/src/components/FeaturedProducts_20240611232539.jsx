
import Card from "../Card";
import featured_data from "../../assets/featured_data";

const FeaturedProducts = () => {
  return (
    <div className="featuredProducts container mx-auto mt-20 px-10">
      <div className="top flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">Featured Products</h1>
        <p className="text-gray-500 text-justify flex-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom flex justify-center gap-10">
        {featured_data.map((item, i) => (
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

export default FeaturedProducts;
