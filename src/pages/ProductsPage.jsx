import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import 'ldrs/dotSpinner';

import {
   filterProducts,
   getInitialQuery,
   searchProducts,
} from '../helpers/helper';
import { useProducts } from '../context/ProductsContext';
import Categories from '../components/Categories';
import Search from '../components/Search';
import Card from '../components/Card';

function ProductsPage() {
   const products = useProducts();
   const [data, setData] = useState([]);
   const [alert, setAlert] = useState(false);
   const [query, setQuery] = useState({ search: '', category: 'all' });
   const [searchParams, setSearchParams] = useSearchParams();

   useEffect(() => {
      setQuery(getInitialQuery(searchParams));
      setData(products);
   }, [products]);
   console.log('query :', query);
   console.log('__________________________');

   useEffect(() => {
      let finalProducts = searchProducts(products, query);

      finalProducts = filterProducts(finalProducts, query);
      console.log('finalProducts :', finalProducts);
      console.log('__________________________');

      if (!finalProducts.length) {
         setData(finalProducts);
      } else {
         setData(finalProducts);
         setAlert(true);
      }
   }, [query]);

   return (
      <>
         <Search
            query={query}
            setQuery={setQuery}
            setSearchParams={setSearchParams}
         />
         <div className="col-span-12 grid grid-cols-12 gap-x-5">
            {data.length ? (
               <div className="col-span-9">
                  <div className="grid grid-cols-12 gap-5">
                     {data.map((product) => (
                        <Card key={product.id} product={product} />
                     ))}
                  </div>
               </div>
            ) : alert ? (
               <h1 className="col-span-9 flex justify-center items-center text-red-600">
                  product is not defind!
               </h1>
            ) : (
               <div className="col-span-9 flex justify-center items-center">
                  <l-dot-spinner
                     size="100"
                     speed="0.8"
                     color="orange"
                  ></l-dot-spinner>
               </div>
            )}
            <Categories
               query={query}
               setQuery={setQuery}
               setSearchParams={setSearchParams}
            />
         </div>
      </>
   );
}

export default ProductsPage;
