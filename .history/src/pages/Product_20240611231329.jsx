import {useContext} from 'react';
import {ShopContext} from '../../Context/ShopContext';
import {useParams} from 'react-router-dom';
import Breadcrum from '../components/Breadcrum';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import NewCollections from '../../components/NewCollections/NewCollections';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <NewCollections />
    </div>
  )
}

export default Product
