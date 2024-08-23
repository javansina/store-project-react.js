function NumberSeparator({ text }) {
   const parts = text.split(/(\d+)/);

   return (
      <>
         {parts.map((part, index) =>
            /\d+/.test(part) ? (
               <span key={index} className="font-sans">
                  {part}
               </span>
            ) : (
               <span key={index}>{part}</span>
            )
         )}
      </>
   );
}

export default NumberSeparator;
