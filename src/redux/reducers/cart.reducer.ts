import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICredential, IProduct, IUser} from '../../types';
import {RootState} from '../store';

export type CartState = {
  items: IProduct[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.items = [...state.items, action.payload];
    },
    updateCart: (state, action: PayloadAction<IProduct[]>) => {
      state.items = action.payload;
    },
    deleteCartItem: (state, action: PayloadAction<string>) => {
      const result = state.items.filter(item => item._id !== action.payload);
      state.items = result;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;

export const {addToCart, deleteCartItem, updateCart} = cartSlice.actions;
export default cartSlice.reducer;
