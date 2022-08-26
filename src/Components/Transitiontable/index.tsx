import { Container } from "./styled";
export function Transitiontable() {
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
          <tr>
            <td>Desenvolvimentos de Software</td>
            <td>R$1200</td>
            <td>Desenvolvimento</td>
            <td>20/09/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimentos de Software</td>
            <td>R$1200</td>
            <td>Desenvolvimento</td>
            <td>20/09/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimentos de Software</td>
            <td>R$1200</td>
            <td>Desenvolvimento</td>
            <td>20/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
