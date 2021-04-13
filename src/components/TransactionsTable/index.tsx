import React, { useContext } from "react";

import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export default function TransactionsTable() {

  const transactions = useContext(TransactionsContext);

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
            <tr key={curr.id}>
              <td>{curr.title}</td>
              <td className={curr.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(curr.amount)}
              </td>
              <td>{curr.category}</td>
              <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(curr.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
