import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

export default function Header({ onOpenNewTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt-money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>

          
      </Content>
    </Container>
  );
}
