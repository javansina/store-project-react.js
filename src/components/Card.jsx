import {
   TbListDetails,
   TbShoppingBag,
   TbShoppingBagMinus,
   TbShoppingBagPlus,
} from 'react-icons/tb';
import { titleTripler } from '../helpers/helper';
import { FaRegTrashCan } from 'react-icons/fa6';

function Card({ product }) {
   const { title, price, image } = product;
   // console.log(title, price, image);
   // console.log(titleTripler(title));

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
               <span className="font-sans text-slate-600">{price} <span className='text-slate-800'>$</span></span>
               <div className='flex justify-between'>
                  <TbListDetails/>
                  <div className='flex'>
                     <TbShoppingBagPlus />
                     <TbShoppingBagMinus />
                     <TbShoppingBag />
                     <FaRegTrashCan />
                     
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Card;
