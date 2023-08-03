import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//API
function fetchItems() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve('success'), 500);
  });
}
//Actions
export const addExpense = createAsyncThunk('expenses/add', async (item, thunkAPI) => {
  const response = await fetchItems();
  return item;
});
export const updateExpense = createAsyncThunk('expenses/update', async (item, thunkAPI) => {
  const response = await fetchItems();
  return item;
});
export const removeExpense = createAsyncThunk('expenses/remove', async (item, thunkAPI) => {
  const response = await fetchItems();
  return item;
});
//Reducers
const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenseItems: [],
    loading: false,
    success: false,
  },
  extraReducers: builder => {
    builder
      .addCase(updateExpense.pending, state => {
        state.loading = true;
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseItems = state.expenseItems.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        });
        state.success = true;
      })
      .addCase(addExpense.pending, state => {
        state.loading = true;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseItems.push(action.payload);
        state.success = true;
      })
      .addCase(removeExpense.pending, state => {
        state.loading = true;
      })
      .addCase(removeExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseItems = state.expenseItems.filter(item => action.payload.id !== item.id);
        state.success = true;
      });
  },

  reducers: {
    // addExpense: (state, action) => {
    //   state.expenseItems.push(action.payload);
    // },
    // updateExpense: (state, action) => {
    //   state.expenseItems = state.expenseItems.map(item => {
    //     if (item.id === action.payload.id) {
    //       return action.payload;
    //     } else {
    //       return item;
    //     }
    //   });
    // },
    // removeExpense: (state, action) => {
    //   state.expenseItems = state.expenseItems.filter(item => action.payload.id !== item.id);
    // },
    resetExpense: state => {
      state.success = false;
    },
  },
});

//export const addExpense = expenseSlice.actions.addExpense;
//export const updateExpense = expenseSlice.actions.updateExpense;
//export const removeExpense = expenseSlice.actions.removeExpense;
export const resetExpense = expenseSlice.actions.resetExpense;
export default expenseSlice.reducer;
