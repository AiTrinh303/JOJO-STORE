
import new_collections from '../assets/new_collections';
import Card from './Card';

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-20 mb-20">
      <h1 className="mt-80 text-gray-900 text-3xl font-semibold">NEW COLLECTIONS</h1>
      <hr className="w-200 h-5 rounded-10 bg-black" />
      <div data-aos="zoom-in-up" className="grid grid-cols-5 gap-30 mt-50">
        {new_collections.map((item, i) => (
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

export default NewCollections;
