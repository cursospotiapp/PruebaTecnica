import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 764px) {
    background: rgb(0, 212, 255);
    background: linear-gradient(
      90deg,
      rgba(14, 77, 90, 1) 3%,
      rgba(85, 85, 180, 1) 53%,
      rgba(32, 32, 64, 1) 93%
    );
  }
`;

export const ContainerPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  background: rgba(255, 255, 255, 4);
  box-shadow: 0 1px 10px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  text-transform: uppercase;

  @media only screen and (min-width: 360px) {
    width: 95%;
    height: 97vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 95%;
    height: 60vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
    height: 60vh;
  }
`;
