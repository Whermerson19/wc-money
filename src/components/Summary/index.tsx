import { useContext, useMemo } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container, Card } from "./styles";

export default function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const incomes = useMemo(() => {
    return transactions.reduce((accumulator, transaction) => {
      if (transaction.type === 'deposit') {
        accumulator += transaction.amount
      }

      return accumulator
    }, 0)
  }, [transactions]);

  const outcomes = useMemo(() => {
    return transactions.reduce((accumulator, transaction) => {
      if (transaction.type === 'withdraw') {
        accumulator += transaction.amount
      }

      return accumulator
    }, 0)
  }, [transactions]);

  return (
    <Container>
      <Card>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income" />
        </header>

        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(incomes)}</strong>
      </Card>

      <Card>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="outcome" />
        </header>

        <strong>-{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(outcomes)}</strong>
      </Card>

      <Card isTotal>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>

        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format((incomes - outcomes))}</strong>
      </Card>
    </Container>
  );
}
