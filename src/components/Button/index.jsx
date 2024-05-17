import { Container } from "./styles";

export function Button({ label, icon, loading = false }) {
  return (
    <Container type="button" disabled={loading}>
      {icon}
      {loading ? "Carregando..." : label}
    </Container>
  );
}
