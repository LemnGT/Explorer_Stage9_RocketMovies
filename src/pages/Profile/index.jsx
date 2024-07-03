import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  IoIosLock,
  IoIosMail,
  IoMdPerson,
  IoIosArrowRoundBack,
  IoIosCamera,
} from "react-icons/io";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <IoIosArrowRoundBack />
          Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/LemnGT.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <IoIosCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={IoMdPerson} />
        <Input placeholder="E-mail" type="text" icon={IoIosMail} />
        <Input placeholder="Senha atual" type="text" icon={IoIosLock} />
        <Input placeholder="Nova senha" type="text" icon={IoIosLock} />
        <Button label="Salvar" />
      </Form>
    </Container>
  );
}
