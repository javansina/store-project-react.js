import { useEffect, useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';
function Header() {
   const { pathname } = useLocation();
   const matchProduct = useMatch('/products/:id');
   const [style, setStyle] = useState({});
   const { state } = useCart();

   useEffect(() => {
      if (matchProduct) {
         setStyle({
            icon: <HiHome size={25} />,
            click: () => history.go(-1),
         });
      } else {
         switch (pathname) {
            case '/checkout':
               setStyle({
                  icon: <HiHome size={25} />,
                  click: () => history.go(-1),
               });

               break;
            case '/products':
               setStyle({
                  icon: (
                     <FaShoppingCart
                        size={38}
                        style={{ paddingRight: '3px' }}
                     />
                  ),
                  counter: true,
                  url: '/checkout',
               });

               break;
            case '//products/:id':
               setStyle({
                  icon: <HiHome size={25} />,
                  url: '/products',
               });

               break;

            default:
               break;
         }
      }
   }, [pathname]);

   return (
      <>
         <div className="relative w-full min-h-16 bg-myOrange rounded-xl flex justify-between items-center px-7 mt-5">
            <span className="font-bold text-2xl text-white">My store</span>
            <Link
               to={style.url}
               onClick={style.click}
               className="hover:text-myOrange hover:bg-gray-200 rounded-md p-1.5 text-white transition-colors"
            >
               {style.icon}
            </Link>
            {style.counter && state.productsCounter > 0 && (
               <span className="absolute w-5 h-5 mt-0.5 flex justify-center items-center right-10 top-4 text-myOrange rounded-full font-sans">
                  {state.productsCounter}
               </span>
            )}
         </div>
      </>
   );
}

export default Header;
