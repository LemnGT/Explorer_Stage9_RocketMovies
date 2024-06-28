import { Container, Form, BG } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { IoIosLock, IoIosMail } from "react-icons/io";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu Login</h2>
        <Input type="text" placeholder="E-mail" icon={IoIosMail} />
        <Input type="password" placeholder="Senha" icon={IoIosLock} />
        <Button label="Entrar" />
        <ButtonText title="Criar conta" />
      </Form>
      <BG />
    </Container>
  );
}
