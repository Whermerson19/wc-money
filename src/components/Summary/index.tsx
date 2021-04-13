import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'

import { Container, Card } from './styles'

export default function Summary() {
  const { transactions } = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <Card>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income"/>
        </header>

        <strong>R$ 1000,00</strong>
      </Card>

      <Card>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="outcome"/>
        </header>

        <strong>- R$ 500,00</strong>
      </Card>

      <Card isTotal>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total"/>
        </header>

        <strong>R$ 500,00</strong>
      </Card>
    </Container>
  )
}