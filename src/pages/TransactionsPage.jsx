import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import Transaction from "../components/Transaction/Transaction";
import TransactionForm from "../components/Transaction/TransactionForm";
import { fetchTransactions } from "../features/transactions/transactionSlice";

function TransactionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transactions
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
    // if (!isModalOpen) {
    //     dispatch(fetchTransactions());
    // }
  }, [dispatch]);

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );
  if (!isLoading && !isError && transactions?.length === 0)
    content = (
      <div className="text-center text-2xl font-bold">
        No transactions found
      </div>
    );
  if (!isLoading && !isError && transactions?.length > 0)
    content = <Transaction key={transactions.id} transactions={transactions} />;

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
      </div>
      <div className="mb-4">
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add Transaction"
        >
          <TransactionForm onClose={() => setIsModalOpen(false)}/>
        </Modal>
      </div>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </div>
      <div className="mb-4">{content}</div>
    </div>
  );
}

export default TransactionsPage;
