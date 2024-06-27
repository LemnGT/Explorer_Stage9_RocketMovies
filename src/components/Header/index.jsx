import { Input } from "../Input";
import { Container, Profile, PageName } from "./styles";
import { ButtonText } from "../ButtonText";
import { IoIosSearch } from "react-icons/io";

export function Header() {
  return (
    <Container>
      <PageName>RocketMovies</PageName>

      <Input
        type="text"
        placeholder="Pesquisar por título"
        icon={IoIosSearch}
      />

      <Profile>
        <div>
          <strong>Marcelo Gabriel</strong>
          <ButtonText title="sair" />
        </div>
        <img src="https://github.com/LemnGT.png" alt="Imagem do usuário" />
      </Profile>
    </Container>
  );
}
