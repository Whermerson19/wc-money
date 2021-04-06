import React, { useCallback, useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

import NewTransactionModal from "./components/NewTransactionModal";

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
