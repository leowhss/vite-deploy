import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
// };

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // addItem: (state, action) => {
    //   const existingItem = state.cartItems.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     state.cartItems.push({ ...action.payload, quantity: 1 });
    //   }

    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
  },

  removeItem: (state, action) => {
    state.cartItems = state.cartItems.filter(
      (item) => item.id !== action.payload
    );

    state.items = state.items.filter((item) => item.name !== action.payload);
  },

  updateQuantity: (state, action) => {
    const { name, quantity } = action.payload;
    const itemToUpdate = state.items.find((item) => item.name === name);
    if (itemToUpdate) {
      itemToUpdate.quantity = quantity;
    }
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
