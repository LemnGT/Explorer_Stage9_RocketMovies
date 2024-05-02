import { Container, Profile, Search, PageName } from "./styles";

export function Header() {
  return (
    <Container>
      <PageName>RocketMovies</PageName>

      <Search type="text" placeholder="Pesquisar por título" />

      <Profile>
        <div>
          <strong>Marcelo Gabriel</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/LemnGT.png" alt="Imagem do usuário" />
      </Profile>
    </Container>
  );
}
