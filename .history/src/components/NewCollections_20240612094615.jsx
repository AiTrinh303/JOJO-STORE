
import new_collections from '../assets/new_collections';
import Card from './Card';

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-20 mb-20">
      <h1 className="mt-80 text-gray-900 text-5xl font-semibold">NEW COLLECTIONS</h1>
      <hr className="rounded-lg bg-gray-900" style={{ width: '200px', height: '5px' }} />
      <div data-aos="zoom-in-up" className="bottom flex justify-center gap-10">
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
