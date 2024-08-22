import { useEffect } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';

function Header() {
   const { pathname } = useLocation();
   const matchProduct = useMatch('/products/:id');

   console.log(matchProduct);

   useEffect(() => {
      console.log(pathname);
      switch (pathname) {
         case '/checkout':
            break;

         default:
            break;
      }
   }, [pathname]);

   return (
      <>
         <div className="w-full h-16 bg-myOrange rounded-xl flex justify-between items-center px-7 mt-5">
            <span className="font-bold text-2xl text-white">Store</span>
            <Link
               to={'/checkout'}
               className=" hover:text-myOrange hover:bg-white/80 rounded-md p-1.5 bg-myOrange text-white transition-colors"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.9"
                  stroke="currentColor"
                  className="size-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
               </svg>
            </Link>
         </div>
      </>
   );
}

export default Header;
