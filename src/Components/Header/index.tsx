import logo from "../../assets/logo.svg";
import { Container, Content } from "./styled";
interface HeaderProps {
  onOpenNewTransaction: () => void;
}
export function Header({ onOpenNewTransaction }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt-money" />
        <button type="button" onClick={onOpenNewTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
