import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, MiniPreview } from "./styles";
import { FaPlus } from "react-icons/fa6";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <h1>Meus filmes</h1>
          <Button icon={<FaPlus />} label="Adicionar filme" />
        </div>
        <MiniPreview></MiniPreview>
      </main>
    </Container>
  );
}
