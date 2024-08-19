import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/config';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
   const [data, setData] = useState([]);

   useEffect(() => {
      api.get('/products')
         .then((res) => setData(res))
         .catch((err) => console.log(err.message));
   }, []);

   return (
      <ProductsContext.Provider value={data}>
         {children}
      </ProductsContext.Provider>
   );
}

export const useProducts = () => useContext(ProductsContext);

export default ProductsProvider;
