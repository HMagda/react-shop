import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product key={product.id} {...product}/>)}
      
      {/* <Product {...products[0]} />
      <Product {...products[1]} /> */}
    </section>
  );
};

export default Products;