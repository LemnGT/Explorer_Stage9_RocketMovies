import styled from "styled-components";

export const Container = styled.input`
  padding: 19px 24px;
  height: 18px;
  width: 50%;
  background-color: ${({ theme }) => theme.COLORS.BG_LIGHT};
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
`;
