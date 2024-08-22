/* eslint-disable no-case-declarations */
import { createContext, useContext, useReducer } from 'react';
import { sumHandler } from '../helpers/helper';

const CartCotext = createContext();

const initialState = {
   selectedProducts: [],
   totalPrice: 0,
   productsCounter: 0,
   checkout: false,
};

const reducer = (state, action) => {
   console.log(state, action);
   switch (action.type) {
      case 'ADD-PRODUCT':
         if (!state.selectedProducts.find((i) => i.id === action.payload.id)) {
            state.selectedProducts.push({ ...action.payload, quantity: 1 });
         }
         return {
            selectedProducts: [...state.selectedProducts],
            ...sumHandler(state.selectedProducts),
            checkout: false,
         };
      case 'REMOVE-PRODUCT':
         const newSelectedProducts = state.selectedProducts.filter(
            (i) => i.id !== action.payload.id
         );
         return {
            selectedProducts: [...newSelectedProducts],
            ...sumHandler(newSelectedProducts),
            checkout: false,
         };
      case 'INCREASE-PRODUCT':
         const increaseIndex = state.selectedProducts.findIndex(
            (i) => i.id === action.payload.id
         );
         state.selectedProducts[increaseIndex].quantity++;
         return {
            ...state,
            ...sumHandler(state.selectedProducts),
         };
      case 'DICREASE-PRODUCT':
         const dicreaseIndex = state.selectedProducts.findIndex(
            (i) => i.id === action.payload.id
         );
         state.selectedProducts[dicreaseIndex].quantity--;
         return {
            ...state,
            ...sumHandler(state.selectedProducts),
         };
      case 'CHECKOUT':
         return {
            selectedProducts: [],
            totalPrice: 0,
            productsCounter: 0,
            checkout: true,
         };
      default:
         throw new Error('Invalid action!');
   }
};

function CartProvider({ children }) {
   const [state, dispatch] = useReducer(reducer, initialState);
   console.log(state);

   return (
      <CartCotext.Provider value={{ state, dispatch }}>
         {children}
      </CartCotext.Provider>
   );
}

export const useCart = () => useContext(CartCotext);

export default CartProvider;
