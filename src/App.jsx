import { Navigate, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import Detailspage from './pages/Detailspage';
import CheckoutPage from './pages/CheckoutPage';
import PageNotFound from './pages/404';
import ProductsProvider from './context/ProductsContext';

function App() {
   return (
      <>
         <ProductsProvider>
            <Routes>
               <Route index element={<Navigate to="/products" replace />} />
               <Route path="/products" element={<ProductsPage />} />
               <Route path="/products/:id" element={<Detailspage />} />
               <Route path="/checkout" element={<CheckoutPage />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </ProductsProvider>
      </>
   );
}

export default App;
