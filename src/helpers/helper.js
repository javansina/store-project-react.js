export const titleTripler = (title) => {
   const tripled = title.split(' ').slice(0, 3).join(' ');
   return tripled;
};

export const searchProducts = (products, query) => {
   if (query.search === undefined || query.search === '') return products;
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

export const checkQuery = (currentQuary, newQuarry, queryType) => {
   console.log(newQuarry);
   
   if (queryType === 'search') {
      if (newQuarry.search === '') {
         const { search, ...category } = currentQuary;
         if (currentQuary.category === 'all' || currentQuary.category === undefined) {
            return {};
         } else {
            return category;
         }
      } else {
         if (currentQuary.category === 'all' || currentQuary.category === undefined ) {
            return newQuarry;
         } else {
            return { ...currentQuary, ...newQuarry };
         }
      }
   }
   if (queryType === 'category') {
      if (newQuarry.category === 'all') {
         const { category, ...search } = currentQuary;
         if (currentQuary.search === '' || currentQuary.search === undefined ) {
            return {};
         } else {
            return search;
         }
      } else {
         if (currentQuary.search === '' || currentQuary.search === undefined ) {
            return newQuarry;
         } else {
            return { ...currentQuary, ...newQuarry };
         }
      }
   }
};
