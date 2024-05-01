import { Container } from "./styles";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Hello World</h1>
      <Button label="Entrar" loading />
      <Button label="Entrar" />
    </Container>
  );
}
