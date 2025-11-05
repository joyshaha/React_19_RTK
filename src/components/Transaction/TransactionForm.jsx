// src/components/Transaction/TransactionForm.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTransaction,
  editTransaction,
} from "../../features/transactions/transactionSlice";

function TransactionForm({ onClose, isEditing = false }) {
  const editing = useSelector((state) => state.transactions.editing);
  const [formData, setFormData] = useState(
    isEditing && editing !== undefined
      ? {
          name: editing.name,
          type: editing.type,
          amount: editing.amount,
        }
      : {
          name: "",
          type: "income", // or 'expense'
          amount: "",
        }
  );

  const dispatch = useDispatch();

  // handle change in form data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit of form data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.amount) {
      dispatch(
        isEditing
          ? editTransaction({
              id: editing._id,
              transaction: formData,
            })
          : createTransaction({
              ...formData,
              amount: parseFloat(formData.amount),
              dispatch
            })
      );
      // fetch transactions after successful submission
      // dispatch(fetchTransactions());
      // Reset form data after successful submission
      setFormData({
        name: "",
        type: "income",
        amount: "",
      });
      onClose();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Transaction Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter transaction name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {isEditing ? "Update" : "Add"} Transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
