import {
   TbListDetails,
   TbShoppingBag,
   TbShoppingBagMinus,
   TbShoppingBagPlus,
} from 'react-icons/tb';
import { productsQuantity, titleTripler } from '../helpers/helper';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useCart } from '../context/CartContext';

function Card({ product }) {
   const { id, title, price, image } = product;
   const { state, dispatch } = useCart();
   console.log(state);

   const quantity = productsQuantity(state, id);
   console.log(quantity);

   const clickHandler = (type) => {
      dispatch({ type, payload: product });
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
               <div className="flex justify-between">
                  <TbListDetails />
                  <div className="flex ">
                     {quantity === 1 && (
                        <div className="child:p-1.5 child:hover:bg-myOrange child:bg-myOrange/90 cursor-pointer child:rounded-md child:text-white">
                           <FaRegTrashCan
                              size="30"
                              onClick={() => clickHandler('REMOVE-PRODUCT')}
                           />
                        </div>
                     )}
                     {quantity >= 2 && (
                        <div className="child:p-1 child:hover:bg-myOrange child:bg-myOrange/90 cursor-pointer child:rounded-md child:text-white">
                           <TbShoppingBagMinus
                              size="30"
                              onClick={() => clickHandler('DICREASE-PRODUCT')}
                           />
                        </div>
                     )}
                     {!quantity && (
                        <div className="child:p-1 child:hover:bg-myOrange child:bg-myOrange/90 cursor-pointer child:rounded-md child:text-white">
                           <TbShoppingBag
                              size="30"
                              onClick={() => clickHandler('ADD-PRODUCT')}
                           />
                        </div>
                     )}
                     {quantity > 0 && (
                        <span className="font-sans text-slate-600 text-lg mt-0.5 w-7 text-center">
                           {quantity}
                        </span>
                     )}
                     {quantity >= 1 && (
                        <div className="child:p-1 child:hover:bg-myOrange child:bg-myOrange/90 cursor-pointer child:rounded-md child:text-white">
                           <TbShoppingBagPlus
                              size="30"
                              onClick={() => clickHandler('INCREASE-PRODUCT')}
                           />
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Card;