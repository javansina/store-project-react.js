import { TbReportMoney } from 'react-icons/tb';
import { HiClipboardList } from 'react-icons/hi';
import { TbRosetteDiscountCheck } from 'react-icons/tb';

import { useCart } from '../context/CartContext';
import Buttons from '../components/Buttons';

function CheckoutPage() {
   const { state, dispatch } = useCart();

   return (
      <>
         <div className="grid grid-cols-12 mt-7 gap-x-8">
            {!!state.selectedProducts.length ? (
               <>
                  <div className="col-span-3 p-8 h-fit border-2 border-dotted border-myOrange rounded-3xl">
                     <div className="flex gap-x-2 mb-4 font-semibold">
                        <div className="mt-0.5">
                           <TbReportMoney color="#ff181f" size={20} />
                        </div>
                        <span className="text-myOrange">Total :</span>
                        <span className="font-sans text-slate-600">
                           {state.totalPrice} $
                        </span>
                     </div>
                     <div className="flex gap-x-2 my-4 font-semibold">
                        <div className="mt-0.5">
                           <HiClipboardList color="#ff181f" size={20} />
                        </div>
                        <span className="text-myOrange">Quantity :</span>
                        <span className="font-sans text-slate-600">
                           {state.productsCounter}
                        </span>
                     </div>
                     <div className="flex gap-x-2 my-4 font-semibold">
                        <div className="mt-0.5">
                           <TbRosetteDiscountCheck color="#ff181f" size={20} />
                        </div>
                        <span className="text-myOrange">Status :</span>
                        <span className="font-sans text-slate-600">
                           {state.checkout ? 'completed' : 'pending...'}
                        </span>
                     </div>
                     <button
                        onClick={() => {
                           dispatch({ type: 'CHECKOUT' });
                        }}
                        className="py-2 w-[100%] rounded-xl mt-5 bg-myOrange text-white"
                     >
                        Checkout
                     </button>
                  </div>
                  <div className="col-span-9 rounded-xl flex flex-col gap-y-5">
                     {state.selectedProducts.map((i) => (
                        <div
                           key={i.id}
                           className="flex justify-between items-center px-8 rounded-3xl border-2 border-dotted"
                        >
                           <img
                              className="w-20 h-20 m-5 ml-0"
                              src={i.image}
                              alt={i.title}
                           />
                           <p className="line-clamp-1 max-w-96">{i.title}</p>
                           <Buttons id={i.id} product={i} />
                        </div>
                     ))}
                  </div>
               </>
            ) : (
               <div className="col-span-12 text-center mt-32 text-2xl text-slate-700">
                  <span className=" border-b p-3">Your cart is Empty</span>
               </div>
            )}
         </div>
      </>
   );
}

export default CheckoutPage;
