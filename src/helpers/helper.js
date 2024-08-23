import { categoriesTextList } from './lists';
let urlCategory = [];

export const titleTripler = (title) => {
   const tripled = title.split(' ').slice(0, 4).join(' ');
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
   if (queryType === 'search') {
      if (newQuarry.search === '') {
         const { search, ...category } = currentQuary;

         if (
            currentQuary.category === 'all' ||
            currentQuary.category === undefined
         ) {
            return {};
         } else {
            return category;
         }
      } else {
         if (
            currentQuary.category === 'all' ||
            currentQuary.category === undefined
         ) {
            return newQuarry;
         } else {
            return { ...currentQuary, ...newQuarry };
         }
      }
   }
   if (queryType === 'category') {
      if (newQuarry.category === 'all') {
         const { category, ...search } = currentQuary;
         if (currentQuary.search === '' || currentQuary.search === undefined) {
            return {};
         } else {
            return search;
         }
      } else {
         if (currentQuary.search === '' || currentQuary.search === undefined) {
            return newQuarry;
         } else {
            return { ...currentQuary, ...newQuarry };
         }
      }
   }
};

export const getInitialQuery = (searchParams) => {
   const query = {};
   urlCategory = categoriesTextList.filter(
      (i) => i.url === searchParams.get('category')
   );
   const search = searchParams.get('search');
   !!urlCategory.length
      ? (query.category = urlCategory[0].title.toLowerCase())
      : (query.category = 'all');
   if (search) query.search = search;
   return query;
};

export const sumHandler = (selectedProducts) => {
   const totalPrice = selectedProducts
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);
   const productsCounter = selectedProducts.reduce(
      (acc, product) => acc + product.quantity,
      0
   );
   return { totalPrice, productsCounter };
};

export const productsQuantity = (state, id) => {
   const index = state.selectedProducts.findIndex((i) => i.id === id);
   return state.selectedProducts[index]?.quantity;
};
