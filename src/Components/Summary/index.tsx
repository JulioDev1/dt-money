import { Container } from "./styled";
import incomeIng from "../../assets/income.svg";
import outCome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIng} alt="entradas" />
        </header>
        <strong>10000R$</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outCome} alt="Saidas" />
        </header>
        <strong>5000R$</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="Total" />
        </header>
        <strong>5000R$</strong>
      </div>
    </Container>
  );
}
