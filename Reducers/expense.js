import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '@env';
//API for testing
// function fetchItems() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => resolve('success'), 1000);
//   });
// }

export const getExpenses = createAsyncThunk('expenses/get', async () => {
  const res = await axios.get(`${API_URL}/expenses.json`);
  const expenses = [];
  for (const key in res.data) {
    const obj = {
      id: key,
      amount: res.data[key].amount,
      date: res.data[key].date,
      description: res.data[key].description,
    };
    expenses.push(obj);
  }
  return expenses;
});

export const addExpense = createAsyncThunk('expenses/add', async (item, thunkAPI) => {
  const res = await axios.post(`${API_URL}/expenses.json`, item);
  const { data, status } = res;
  return { id: data.name, ...item };
});

export const updateExpense = createAsyncThunk('expenses/update', async item => {
  const tempItem = {
    amount: item.amount,
    date: item.date,
    description: item.description,
  };
  const { data, status } = await axios.put(`${API_URL}/expenses/${item.id}.json`, tempItem);
  return item;
});

export const removeExpense = createAsyncThunk('expenses/remove', async item => {
  //const response = await fetchItems();
  const res = await axios.delete(`${API_URL}/expenses/${item.id}.json`);
  return item;
});

//Reducer
const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenseItems: [],
    loading: false,
    success: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getExpenses.pending, state => {
        state.loading = true;
      })
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseItems = action.payload.reverse();
      })
      .addCase(getExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addExpense.pending, state => {
        state.loading = true;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseItems.unshift(action.payload);
        state.success = true;
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
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
      .addCase(updateExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(removeExpense.pending, state => {
        state.loading = true;
      })
      .addCase(removeExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseItems = state.expenseItems.filter(item => action.payload.id !== item.id);
        state.success = true;
      })
      .addCase(removeExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },

  reducers: {
    // addExpense: (state, action) => {
    //   state.expenseItems.push(action.payload);
    // },
    resetExpense: state => {
      state.success = false;
      state.error = false;
      state.loading = false;
    },
  },
});

//export const addExpense = expenseSlice.actions.addExpense;
export const resetExpense = expenseSlice.actions.resetExpense;
export default expenseSlice.reducer;
