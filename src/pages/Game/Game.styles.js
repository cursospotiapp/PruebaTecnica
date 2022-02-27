import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TrafficLight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  font-size: 80px;
  border-radius: 50%;
  margin: 0.5rem 0 2rem 0;
  box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.17);
`;

export const GroupButtons = styled.div`
  display: flex;
  gap: 0.2rem;
`;

const baseButtons = css`
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  background: #fff;
  text-decoration: none;
  border: hsl(137, 26%, 49%) 0.125em solid;
  padding: 1rem 3rem;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(137, 26%, 49%);
  box-shadow: inset 0 0 0.2em 0 hsl(137, 26%, 49%),
    0 0 0.5em 0 hsl(137, 26%, 49%);
  position: relative;
  &:hover {
    color: #fff;
    box-shadow: inset 0 0 4em 0 hsl(137, 26%, 49%),
      0 0 0.5em 0 hsl(137, 26%, 49%);
  }

  @media only screen and (min-width: 512px) {
    font-size: 1.8rem;
    padding: 0.25em 1.2em;
  }
`;

export const ButtonWalk = styled.button`
  ${baseButtons}
  color: hsl(137, 26%, 49%);
`;

export const ButtonExit = styled.div`
  ${baseButtons}
  color: hsl(341, 65%, 49%);
  border: hsl(341, 65%, 49%) 0.125em solid;
  padding: 0.2em 1.8em;
  text-shadow: unset;
  box-shadow: unset;
  &:hover {
    color: #fff;
    box-shadow: inset 0 0 4em 0 hsl(341, 65%, 49%),
      0 0 0.5em 0 hsl(341, 65%, 49%);
  }

  @media only screen and (min-width: 512px) {
    font-size: 1.4rem;
    padding: 0.2em 2em;
  }
`;

export const Logo = styled.h1`
  margin: 1rem 0;
  text-transform: uppercase;
  color: #6b6b78;
  font-size: 2rem;
`;

export const Player = styled.h5`
  margin: 1rem 0;
  text-transform: uppercase;
  color: #9787bf;
  font-size: 1.5rem;

  & > span {
    color: #af4949;
  }
`;
