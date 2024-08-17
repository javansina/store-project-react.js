
import { useEffect, useState } from 'react';
import { api } from '../services/config';


function ProductsPage() {
  const [moz, setMoz] = useState([]);

  useEffect(() => {
     api.get('/products').then((res) => setMoz(res));
  }, []);

  console.log(moz);
   return <div>products</div>;
}

export default ProductsPage;
