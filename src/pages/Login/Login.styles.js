import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 4rem 0;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  max-height: 5vh;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 5vh;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to left, #14163c 0%, #03217b 79%);
  }

  &:active {
    background: linear-gradient(to right, #c5cce0 0%, #859fec 79%);
  }
`;

export const ErrorMsg = styled.span`
  font-size: 0.8rem;
  text-align: center;
  width: 90%;
  color: #bf5a5a;
  background: #f3c7c7;
  border: 2px solid #e59494;
  padding: 1rem;
  margin-top: 1rem;
  @media only screen and (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const Logo = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  & > span:first-child {
    color: #bb3434;
    font-weight: 600;
    font-size: 1.4rem;
  }
  & > span:last-child {
    color: #4caf50;
    font-weight: 600;
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
    & > span:first-child {
      font-size: 2.8rem;
    }
    & > span:last-child {
      font-size: 2.8rem;
    }
  }
`;
