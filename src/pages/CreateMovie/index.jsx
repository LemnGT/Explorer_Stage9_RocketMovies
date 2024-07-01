import { Marcador } from "../../components/Marcador";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import { IoIosArrowRoundBack } from "react-icons/io";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <a href="/">
            <IoIosArrowRoundBack /> Voltar
          </a>
          <h1>Novo filme</h1>
          <header>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota de 0 a 5" />
          </header>
          <Textarea placeholder="Observações" />
          <h2>Marcadores</h2>
          <div className="tags">
            <Marcador value="Família" />
            <Marcador isNew placeholder="Novo marcador" />
          </div>
          <footer>
            <Button label="Excluir filme" />
            <Button label="Salvar alterações" />
          </footer>
        </Form>
      </main>
    </Container>
  );
}
