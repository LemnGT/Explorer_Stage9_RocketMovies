import { Container, Profile, Search } from "./styles";

export function Header() {
  return (
    <Container>
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
