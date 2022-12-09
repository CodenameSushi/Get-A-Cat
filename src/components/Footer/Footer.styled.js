import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #00303f;
  color: #e8aa42;
  font-weight: medium;
  font-size: larger;
  align-items: center;
  padding: 32px;
  height: 6vh;

  span {
    background-image: url("https://media.giphy.com/media/l378wcSfS7eXWQgla/giphy.gif");
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  div {
    display: flex;
    justify-content: center;

    img {
      width: 60px;
    }
  }

  .center-footer {
  margin-left: 40px;
  }
`;
