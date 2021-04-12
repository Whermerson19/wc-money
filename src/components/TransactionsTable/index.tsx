import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container } from "./styles";

interface ITransactions {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((curr) => (
            <tr key={curr.id} >
              <td>{curr.title}</td>
              <td className={curr.type}>{curr.amount}</td>
              <td>{curr.category}</td>
              <td>{curr.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
