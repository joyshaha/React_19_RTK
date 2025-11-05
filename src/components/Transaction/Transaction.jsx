import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editActive,
  editInactive,
  removeTransaction,
} from "../../features/transactions/transactionSlice";
import Modal from "../Modal";
import TransactionForm from "./TransactionForm";

function Transaction({ transactions }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  // handle edit transaction
  const handleEdit = (transaction) => {
    dispatch(editActive(transaction));
    setIsModalOpen(true);
    setIsEditing(true);
  };

  // handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    dispatch(editInactive());
  };

  // handle delete transaction
  const handleDelete = (id) => {
    dispatch(removeTransaction(id));
  };

  return (
    <div>
      <div className="mb-4">
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={isEditing ? "Edit Transaction" : "Add Transaction"}
        >
          <TransactionForm onClose={handleModalClose} isEditing={isEditing} />
        </Modal>
      </div>
      <table className="mx-auto max-w-full w-full shadow-md border-collapse border border-gray-300 text-left rounded-md">
        <thead className="bg-gray-100 text-left rounded-md">
          <tr>
            <th className="border border-gray-300 p-2">Serial No.</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Amount</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {transactions?.map((transaction, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2"> {index + 1} </td>
              <td className="border border-gray-300 p-2">
                {" "}
                {transaction.name}{" "}
              </td>
              <td className="border border-gray-300 p-2">
                {" "}
                {transaction.type}{" "}
              </td>
              <td className="border border-gray-300 p-2">
                {" "}
                {transaction.amount}{" "}
              </td>
              <td className="border border-gray-300 p-2 flex gap-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer"
                  onClick={() => {
                    handleEdit(transaction);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"
                  onClick={() => handleDelete(transaction._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
