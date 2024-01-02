import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICredential, IProduct, IUser} from '../../types';
import {RootState} from '../store';

export type PaymentState = {
  paymentLink?: string;
};

const initialState: PaymentState = {};

const paymentSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    setPaymentLink: (state, action: PayloadAction<string>) => {
      state.paymentLink = action.payload;
    },
  },
});

export const paymentSelector = (state: RootState) => state.payment;

export const {setPaymentLink} = paymentSlice.actions;
export default paymentSlice.reducer;
