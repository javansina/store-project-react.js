import { useEffect, useState } from 'react';
import { checkQuery } from '../helpers/helper';
import { categoriesTextList } from '../helpers/lists';

function Categories({ query, setQuery, setSearchParams }) {
   const { category } = query;

   const [style, setStyle] = useState('all');

   useEffect(() => {
      setStyle(category);
   }, [query]);

   const categoryHandler = (e) => {
      if (e.target.tagName !== 'LI') return;

      setQuery((query) => ({
         ...query,
         category: e.target.dataset.litext.toLowerCase(),
      }));
      setSearchParams(
         checkQuery(query, { category: e.target.dataset.url }, 'category')
      );
   };
   return (
      <>
         <div className="col-span-3 h-fit bg-white border border-dashed border-slate-400 rounded-2xl p-5">
            <span className="flex gap-x-3 text-orange-600 mb-3">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
               </svg>
               Categories
            </span>

            <ul
               className="child:py-1 child:pl-3 child:my-2 last-child:mb-0"
               onClick={categoryHandler}
            >
               {categoriesTextList.map((item, index) => (
                  <li
                     key={item.id}
                     className={`hover:text-orange-600 cursor-pointer ${
                        style ===
                           categoriesTextList[
                              index
                           ].title.toLocaleLowerCase() &&
                        'bg-orange-100 text-orange-600 ml-2 rounded-md'
                     }`}
                     data-url={categoriesTextList[index].url}
                     data-litext={categoriesTextList[index].title}
                     // onClick={() =>
                     //    setStyle(
                     //       categoriesTextList[index].title.toLocaleLowerCase()
                     //    )
                     // }
                  >
                     {item.title}
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
}

export default Categories;
