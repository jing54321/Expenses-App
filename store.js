import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './Reducers/expense';

export const store = configureStore({
  reducer: {
    expenseItems: expenseReducer,
  },
});
