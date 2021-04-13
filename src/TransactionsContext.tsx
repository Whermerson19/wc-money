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

type ITransactionInput = Omit<ITransactions, "id" | "createdAt">;

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ICreateTransactionData {
  transactions: ITransactions[];
  createTransaction(transaction: ITransactionInput): Promise<void>;
}

export const TransactionsContext = createContext<ICreateTransactionData>({} as ICreateTransactionData);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: ITransactionInput) {
    const response = await api.post("transactions", {...transactionInput, createdAt: new Date()});
    const { transaction } = response.data;

    setTransactions([...transactions, transaction])

  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
