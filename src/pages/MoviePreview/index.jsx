import { Container, Links } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <h1>Hello World</h1>
      <Section title="Marcadores">
        <Tag title="Drama" />
      </Section>
    </Container>
  );
}
