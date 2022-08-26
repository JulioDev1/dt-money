import { Summary } from "../Summary";
import { Container } from "./styled";
import { Transitiontable } from "../Transitiontable";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transitiontable />
    </Container>
  );
}
