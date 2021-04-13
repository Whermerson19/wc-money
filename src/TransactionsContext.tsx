import { createContext, ReactNode, useEffect, useState } from "react";
import api from "./services/api";

interface ITransactions {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<ITransactions[]>([]);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      { children }
    </TransactionsContext.Provider>
  )
}