import { useState } from 'react';
import { checkQuery } from '../helpers/helper';

function Search({ query, setQuery, setSearchParams }) {
   const [search, setSearch] = useState('');

   const searchHandler = () => {
      setQuery((query) => ({ ...query, search: search.trim() }));
      setSearchParams(checkQuery(query, { search: search.trim() }, 'search'));
   };

   const goToSearchHandler = (e) => {
      if (e.keyCode === 13) {
         searchHandler();
      }
   };

   return (
      <>
         <div className="flex col-span-12 my-14">
            <input
               type="text"
               value={search}
               onKeyDown={(e) => {
                  goToSearchHandler(e);
               }}
               placeholder="search ..."
               className='p-2 pl-5 border border-dashed border-orange-600 rounded-xl'
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
      </>
   );
}

export default Search;
