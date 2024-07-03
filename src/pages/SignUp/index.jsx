import { Container, Form, BG } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import {
  IoIosLock,
  IoIosMail,
  IoMdPerson,
  IoIosArrowRoundBack,
} from "react-icons/io";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={IoMdPerson} />
        <Input type="text" placeholder="E-mail" icon={IoIosMail} />
        <Input type="password" placeholder="Senha" icon={IoIosLock} />
        <Button label="Cadastrar" />
        <Link to="/">
          <IoIosArrowRoundBack />
          Voltar para o login
        </Link>
      </Form>
      <BG />
    </Container>
  );
}
