import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenseItems: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenseItems.push(action.payload);
    },
    updateExpense: (state, action) => {
      state.expenseItems = state.expenseItems.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    removeExpense: (state, action) => {
      state.expenseItems = state.expenseItems.filter(item => action.payload.id !== item.id);
    },
  },
});

export const addExpense = expenseSlice.actions.addExpense;
export const updateExpense = expenseSlice.actions.updateExpense;
export const removeExpense = expenseSlice.actions.removeExpense;
export default expenseSlice.reducer;
