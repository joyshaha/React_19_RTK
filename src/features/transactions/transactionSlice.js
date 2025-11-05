import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "./transactionAPI";

// initial state
const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
};

// create async thunk
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const response = await getTransactions();
    return response;
  }
);

export const createTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transaction, { dispatch }) => {
    const response = await addTransaction(transaction);
    if (response.status === 201) {
      dispatch(fetchTransactions());
    }
    return response.data;
  }
);

export const editTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async ({ id, transaction }) => {
    const response = await updateTransaction(id, transaction);
    return response;
  }
);

export const removeTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (id) => {
    const response = await deleteTransaction(id);
    return response;
  }
);

// create slice
const transactionSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInactive: (state) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all transactions
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message || "Something went wrong";
        state.transactions = [];
      })
      // create transaction
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions.push(action.payload);
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message || "Something went wrong";
      })
      // edit transaction
      .addCase(editTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        // update the transaction in the state
        // const index = state.transactions.findIndex((transaction) => transaction.id === action.payload.id);
        // if (index >= 0) {
        //   state.transactions[index] = action.payload;
        // }
        state.transactions = state.transactions.map((transaction) =>
          transaction._id === action.payload._id ? action.payload : transaction
        );
        // clear editing state after successful update
        state.editing = {};
      })
      .addCase(editTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message || "Something went wrong";
      })
      // delete transaction
      .addCase(removeTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = state.transactions.filter(
          (transaction) => transaction._id !== action.meta.arg
        );
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message || "Something went wrong";
      });
  },
});

export default transactionSlice.reducer;
export const { editActive, editInactive } = transactionSlice.actions;
