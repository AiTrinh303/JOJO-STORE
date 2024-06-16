
import new_collections from '../../assets/new_collections';
import Card from '../Card/Card';

const NewCollections = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-[100px]">
      <h1 className="mt-[80px] text-[35px] font-semibold text-gray-900">NEW COLLECTIONS</h1>
      <hr className="w-[200px] h-[5px] rounded-[10px] bg-[#252525]" />
      <div className="grid grid-cols-5 gap-[30px] mt-[50px]">
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
