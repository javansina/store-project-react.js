import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { checkQuery, filterProducts, searchProducts } from '../helpers/helper';
import { useProducts } from '../context/ProductsContext';
import Card from '../components/Card';

function ProductsPage() {
   const products = useProducts();
   const [data, setData] = useState([]);
   const [search, setSearch] = useState('');
   const [alert, setAlert] = useState(false);
   const [query, setQuery] = useState({});
   const [, setSearchParams] = useSearchParams();

   useEffect(() => {
      setData(products);
   }, [products]);

   useEffect(() => {
      let finalProducts = searchProducts(products, query);
      finalProducts = filterProducts(finalProducts, query);
      // if (!finalProducts.length) {
      //    // setAlert(true);
      //    setData([]);
      // } else {
      //    setAlert(false);
      // }
      setData(finalProducts);
   }, [query]);

   const categoryHandler = (e) => {
      if (e.target.tagName !== 'LI') return;
      setQuery((query) => ({
         ...query,
         category: e.target.innerText.toLowerCase(),
      }));
      setSearchParams(
         checkQuery(
            query,
            { category: e.target.innerText.toLowerCase() },
            'category'
         )
      );
   };

   const searchHandler = () => {
      setQuery((query) => ({ ...query, search: search.trim() }));
      setSearchParams(checkQuery(query, { search: search.trim() }, 'search'));
      console.log(query);
   };
   console.log(data);

   return (
      <>
         <div className="container flex">
            <input
               type="text"
               value={search}
               placeholder="search ..."
               onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <span onClick={searchHandler}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
               </svg>
            </span>
         </div>
         <div className="container grid grid-cols-12 gap-x-5">
            <div className="col-span-9">
               {/* {alert ? (
                  <h1 className="bg-rose-300 text-red-600">
                     product is not exist!
                  </h1>
               ) : ( */}
               <div className="grid grid-cols-12">
                  {!!data.length &&
                     data.map((product) => (
                        <Card key={product.id} product={product} />
                     ))}
               </div>
               {/* )} */}
            </div>
            <div className="col-span-3 h-fit bg-yellow-900 mt-5">
               <ul onClick={categoryHandler}>
                  <li>All</li>
                  <li>Electronics</li>
                  <li>Jewelery</li>
                  <li>Men&apos;s clothing</li>
                  <li>Women&apos;s clothing</li>
               </ul>
            </div>
         </div>
      </>
   );
}

export default ProductsPage;
