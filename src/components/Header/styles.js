import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_GRAY};

  display: flex;
  justify-content: space-between;

  padding: 0 123px;
  background-color: ${({ theme }) => theme.COLORS.BG_MEDIUM};
`;
