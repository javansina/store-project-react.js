import { FaRegTrashCan } from 'react-icons/fa6';
import {
   TbShoppingBag,
   TbShoppingBagMinus,
   TbShoppingBagPlus,
} from 'react-icons/tb';
import { productsQuantity } from '../helpers/helper';
import { useCart } from '../context/CartContext';

function Buttons({ id, product }) {
   const { state, dispatch } = useCart();

   const quantity = productsQuantity(state, id);
   const clickHandler = (type) => {
      dispatch({ type, payload: product });
   };

   return (
      <>
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
      </>
   );
}

export default Buttons;
