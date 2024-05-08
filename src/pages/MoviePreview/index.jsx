import { Container, Links } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <Button />
      <ButtonText title="Criar conta" />

      <h1>Hello World</h1>
      <Section title="Marcadores">
        <Tag title="Drama" />
      </Section>
    </Container>
  );
}
