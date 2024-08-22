import { TbReportMoney } from 'react-icons/tb';
import { HiClipboardList } from 'react-icons/hi';
import { TbRosetteDiscountCheck } from 'react-icons/tb';
function Detailspage() {
   return (
      <>
         <div className="grid grid-cols-12 mt-16 gap-x-8">
            <div className="col-span-3 p-8 border-2 border-dotted border-myOrange  rounded-3xl">
               <div className="flex gap-x-2 mb-4 font-semibold">
                  <div className="mt-0.5">
                     <TbReportMoney color="#ff181f" size={20} />
                  </div>
                  <span className="text-myOrange">Total :</span>
                  <span className="font-sans text-slate-600">{'234.34 $'}</span>
               </div>
               <div className="flex gap-x-2 my-4 font-semibold">
                  <div className="mt-0.5">
                     <HiClipboardList color="#ff181f" size={20} />
                  </div>
                  <span className="text-myOrange">Quantity :</span>
                  <span className="font-sans text-slate-600">{'2'}</span>
               </div>
               <div className="flex gap-x-2 my-4 font-semibold">
                  <div className="mt-0.5">
                     <TbRosetteDiscountCheck color="#ff181f" size={20} />
                  </div>
                  <span className="text-myOrange">Status :</span>
                  <span className="font-sans text-slate-600">
                     {'pending...'}
                  </span>
               </div>
               <button className="py-2 w-[100%] rounded-xl mt-5 bg-myOrange text-white">
                  Checkout
               </button>
            </div>
            <div className="col-span-9 rounded-xl">
               <div className="flex justify-between px-8 rounded-xl border-2 border-dotted">
                  <img src="" alt="" />
                  <p>asdfasdfasdf asdf asdf asd fasd fasd fasd</p>
                  <div>fdsgsg</div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Detailspage;
