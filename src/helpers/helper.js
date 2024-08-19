export const titleTripler = (title) => {
   const tripled = title.split(' ').slice(0, 3).join(' ');
   return tripled;
};

export const searchProducts = (products, query) => {
   if (!query.search) return products;
   const searchedProducts = products.filter((i) =>
      i.title.toLowerCase().includes(query.search)
   );
   return searchedProducts;
};

export const filterProducts = (products, query) => {
   if (query.category === 'all') return products;
   const filteredData = products.filter((i) => i.category === query.category);
   return filteredData;
};

export const checkQuery = (currentQuary, newQuarry, moz) => {
   if (moz === 'search') {
      if (newQuarry.search === '' || newQuarry.search === undefined) {
         const { search, ...rest } = currentQuary;
         return rest;
      }
   }
   if (moz === 'category') {
      if (newQuarry.category === 'all') {
         const { category, ...rest } = currentQuary;
         return rest;
      }
   }
   return { ...currentQuary, ...newQuarry };
};
