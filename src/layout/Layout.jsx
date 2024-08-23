import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
   // window.scrollTo({ top: 0, behavior: 'auto' });

   return (
      <>
         <div className="flex flex-col justify-between h-screen max-h-screen px-5 lg:px-28 xl:px-40 scrollbar-hide overflow-y-auto">
            <div>
               <Header />
               {children}
            </div>
            <Footer />
         </div>
      </>
   );
}

export default Layout;
