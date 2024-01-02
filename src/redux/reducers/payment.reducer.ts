import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICredential, IProduct, IUser} from '../../types';
import {RootState} from '../store';

export type PaymentState = {
  paymenLink?: string;
};

const initialState: PaymentState = {};

const paymentSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
});

export const paymentSelector = (state: RootState) => state.payment;

export const {} = paymentSlice.actions;
export default paymentSlice.reducer;
