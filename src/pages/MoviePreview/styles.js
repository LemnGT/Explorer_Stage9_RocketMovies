import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: "content";
    overflow-y: scroll;
    padding: 40px 0px;
  }
`;

export const Links = styled.ul`
  list-style: none;
  > li {
    padding: 16px;
    a {
      color: ${({ theme }) => theme.COLORS.FONT_WHITE};
    }
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: flex-start;
  }

  > h1 {
    font-size: 36px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.FONT_WHITE};
  }

  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.FONT_WHITE};
    text-align: justify;
  }

  > Section {
    margin-bottom: 40px;
  }

  #title {
    padding: 24px 0px;
  }

  #infos {
    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 8px;
    }
    span {
      color: ${({ theme }) => theme.COLORS.FONT_WHITE};
      margin-right: 8px;
    }
  }
`;
