import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center gap-2 text-gray-600 text-lg font-semibold mx-15 mx-16 capitalize">
      HOME <NavigateNextIcon />
      SHOP <NavigateNextIcon />
      {product.category} <NavigateNextIcon />
      {product.title}
    </div>
  );
}

export default Breadcrum;
