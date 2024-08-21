import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { checkQuery, filterProducts, searchProducts } from '../helpers/helper';
import { useProducts } from '../context/ProductsContext';
import Card from '../components/Card';
import { categoriesDatasetList, categoriesTextList } from '../helpers/lists';
import Categories from '../components/Categories';
import Search from '../components/Search';

function ProductsPage() {
   const products = useProducts();
   const [data, setData] = useState([]);
   const [alert, setAlert] = useState(false);
   const [query, setQuery] = useState({ search: '', category: 'all' });
   const [, setSearchParams] = useSearchParams();

   useEffect(() => {
      setData(products);
   }, [products]);
   console.log(query);

   useEffect(() => {
      let finalProducts = searchProducts(products, query);
      finalProducts = filterProducts(finalProducts, query);
      setData(finalProducts);
   }, [query]);

   return (
      <>
         <Search
            query={query}
            setQuery={setQuery}
            setSearchParams={setSearchParams}
         />
         <div className="col-span-12 grid grid-cols-12 gap-x-5">
            <div className="col-span-9">
               {/* {alert ? (
                  <h1 className="bg-rose-300 text-red-600">
                  product is not exist!
                  </h1>
                  ) : ( */}
               <div className="grid grid-cols-12 gap-5">
                  {!!data.length &&
                     data.map((product) => (
                        <Card key={product.id} product={product} />
                     ))}
               </div>
               {/* )} */}
            </div>
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
