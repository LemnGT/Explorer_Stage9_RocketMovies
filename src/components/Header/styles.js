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
  align-items: center;

  padding: 0 5%;
  background-color: ${({ theme }) => theme.COLORS.BG_MEDIUM};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
    }

    strong {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.FONT_WHITE};
    }
  }
`;
export const PageName = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PINK};
`;
