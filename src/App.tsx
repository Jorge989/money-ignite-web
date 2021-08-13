import React, { useState } from "react";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
Modal.setAppElement("#root");
export function App() {
  const [isNewTransactionModalOpen, setNewIsTransactionModalOpen] =
    useState(false);
  function handleOpenNewTransactionModal() {
    setNewIsTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setNewIsTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
