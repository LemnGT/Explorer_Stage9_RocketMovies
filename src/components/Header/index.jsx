import { Input } from "../Input";
import { Container, Profile, PageName } from "./styles";
import { ButtonText } from "../ButtonText";
import { IoIosSearch } from "react-icons/io";

export function Header() {
  return (
    <Container>
      <PageName to="/">RocketMovies</PageName>

      <Input
        type="text"
        placeholder="Pesquisar por título"
        Icon_end={<IoIosSearch />}
      />

      <Profile to="/profile">
        <div>
          <strong>Marcelo Gabriel</strong>
          <a href="/"> sair</a>
        </div>
        <img src="https://github.com/LemnGT.png" alt="Imagem do usuário" />
      </Profile>
    </Container>
  );
}
