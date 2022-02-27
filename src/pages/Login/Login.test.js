import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("../../utils/managePlayer", () => ({
  ...jest.requireActual("../../utils/managePlayer"),
  saveUser: () => jest.fn((name) => ({ name, points: 0, bestScore: 0 })),
}));

test("<Login /> without user or invalid user", () => {
  const setUser = jest.fn();
  render(<Login setUser={setUser} />);
  const buttonPlay = screen.getByRole("button", { name: /Jugar !/i });
  userEvent.click(buttonPlay);

  const error = screen.getByRole("presentation");
  expect(error).toBeInTheDocument();
});

test("<Login /> with user correct", () => {
  const setUser = jest.fn();
  render(<Login setUser={setUser} />);
  const inputPlayer = screen.getByLabelText("player-input");
  const buttonPlay = screen.getByRole("button", { name: /Jugar !/i });

  fireEvent.change(inputPlayer, { target: { value: "jhon" } });
  userEvent.click(buttonPlay);

  expect(inputPlayer.value).toBe("jhon");
});
