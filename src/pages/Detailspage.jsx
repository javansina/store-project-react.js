import { useParams } from 'react-router-dom';
import { TbCirclesRelation } from 'react-icons/tb';
import { TbBrandCashapp } from 'react-icons/tb';

import { useProducts } from '../context/ProductsContext';
import { titleTripler } from '../helpers/helper';

import NumberSeparator from '../components/NumberSeparator';

function Detailspage() {
   const { id } = useParams();
   const products = useProducts();

   window.scrollTo(0, 0);

   window.scrollTo({ top: 0, behavior: 'auto' });

   const [product] = products.filter((i) => i.id === +id);

   return (
      <>
         {product && (
            <div className="grid grid-cols-12 mt-7 gap-x-8">
               <div className="col-span-3 p-8 py-14 h-fit border-2 border-dotted border-myOrange/90 rounded-3xl">
                  <img src={product.image} alt={product.title} />
               </div>
               <div className="col-span-9 flex flex-col gap-y-16 p-16 h-fit border-2 border-dotted border-slate-400 rounded-3xl">
                  <h2 className="text-myOrange font-black text-3xl">
                     {titleTripler(product.title)}
                  </h2>
                  <div className="leading-10 tracking-wider text-2xl text-slate-700">
                     <NumberSeparator text={product.description} />
                  </div>
                  <div className="flex items-end justify-start gap-x-14">
                     <span className="flex items-center gap-2">
                        <TbCirclesRelation size={25} color="#fe5d42" />
                        <h5 className="text-lg font-semibold tracking-wide">
                           {product.category}
                        </h5>
                     </span>
                     <span className="flex items-center gap-2">
                        <TbBrandCashapp size={25} color="#fe5d42" />
                        <h5 className="text-lg font-sans font-medium tracking-wide">
                           {product.price}
                        </h5>
                     </span>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default Detailspage;
