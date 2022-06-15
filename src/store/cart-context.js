import React from "react";


const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;

// STEPS IN CREATING A CONTEXT API
// 1. CREATE THE CONTEXT EG. JUST ABOVE 
// 2. MANAGE THE CONTEXT with useState OR useReducer
// using CartProvider.js
// 3. User the context Provider 
// to wrap all components that needs access to its data
