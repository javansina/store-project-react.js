import { TbListDetails } from 'react-icons/tb';
import { titleTripler } from '../helpers/helper';

import Buttons from './Buttons';
import { Link } from 'react-router-dom';

function Card({ product }) {
   const { id, title, price, image } = product;

   const moz = () => {
      window.scrollTo(0, 0);
      location.pathname = `/products/${id}`;
   };

   return (
      <>
         <div className="col-span-4 grid grid-rows-12 border-slate-400 bg-white border border-dashed rounded-2xl">
            <div className="flex items-center justify-center bg-white row-span-8 m-5">
               <img className="max-h-64 px-4" src={image} alt={title} />
            </div>
            <div className="row-span-4 m-5 flex flex-col justify-between">
               <h4 className="font-bold text-lg text-orange-600 line-clamp-1">
                  {titleTripler(title)}
               </h4>
               <span className="font-sans text-slate-600">
                  {price} <span className="text-slate-800">$</span>
               </span>
               <div className="flex justify-between items-center">
                  <Link
                     onClick={moz}
                     className="p-1.5 rounded-md hover:bg-myOrange hover:text-white"
                  >
                     <TbListDetails size={20} />
                  </Link>
                  <Buttons id={id} product={product} />
               </div>
            </div>

         </div>
      </>
   );
}

export default Card;
