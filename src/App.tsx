import { useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { GlobalStyle } from "./styles/GlobalStyles";
export function App() {
  const [isNewtransactionModal, setisNewtransactionModal] = useState(false);
  function handleOpenNewtransactionModal() {
    setisNewtransactionModal(true);
  }
  function handleCloseNewtransactionModal() {
    setisNewtransactionModal(false);
  }

  return (
    <>
      <Header onOpenNewTransaction={handleOpenNewtransactionModal} />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewtransactionModal}
        onRequestClose={handleCloseNewtransactionModal}
      />
      <Dashboard />
    </>
  );
}
