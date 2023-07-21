import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenseItems: [{ id: 1, name: 'sample', date: '2023-4-18', amount: 20.5 }],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenseItems.push(action.payload);
    },
    removeExpense: (state, action) => {
      expenseItems.filter(item => action.payload.id !== item.id);
    },
  },
});

export const addExpense = expenseSlice.actions.addExpense;
export const removeExpense = expenseSlice.actions.removeExpense;
export default expenseSlice.reducer;
