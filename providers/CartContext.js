'use client'
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Reducer for the cart context.
 *
 * Handles the following actions:
 *
 * - `ADD_ITEM`: Adds the given item to the cart.
 * - `REMOVE_ITEM`: Removes the given item from the cart.
 *
 * @param {Object} state - The current state of the cart.
 * @param {Object} action - The action to apply to the cart.
 * @returns {Object} The new state of the cart.
 */
/******  9ca8e203-a4a1-4df5-9346-0c797519f2a0  *******/
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
