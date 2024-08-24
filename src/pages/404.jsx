function PageNotFound() {
   return (
      <>
         <div className="h-full flex justify-center items-center">
            <div className="flex justify-center items-center border-b m-52 pb-10 border-myBlue-300">
               <span className="font-semibold mt-10 text-end text-3xl text-myBrown-100">
                  Page Not Found
               </span>
               <span className="font-bold pl-5 text-7xl text-red-600">404</span>
            </div>
         </div>
      </>
   );
}

export default PageNotFound;
