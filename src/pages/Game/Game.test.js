import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "./Game";

const MockName = "<Login />";
const mockedUsedNavigate = MockName;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => mockedUsedNavigate,
}));

test("<Game /> click button Right", () => {
  const user = {
    name: "jhon",
    points: 0,
    bestScore: 0,
  };

  render(
    <MemoryRouter>
      <Game user={user} />
    </MemoryRouter>
  );

  const buttonWalk = screen.getByRole("button", { name: /R/ });

  const score = screen.getByRole("presentation").innerHTML;
  expect(score).toBe("0");

  userEvent.click(buttonWalk);

  const scoreAfter = screen.getByRole("presentation").innerHTML;
  expect(scoreAfter).toBe("1");
});

test("<Game /> click button Left", () => {
  const user = {
    name: "jhon",
    points: 0,
    bestScore: 0,
  };

  render(
    <MemoryRouter>
      <Game user={user} />
    </MemoryRouter>
  );

  const buttonWalk = screen.getByRole("button", { name: /L/ });

  const score = screen.getByRole("presentation").innerHTML;
  expect(score).toBe("0");

  userEvent.click(buttonWalk);

  const scoreAfter = screen.getByRole("presentation").innerHTML;
  expect(scoreAfter).toBe("1");
});
