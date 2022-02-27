import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Game from "./pages/Game/Game";

test("renders login component", () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <App />
    </MemoryRouter>
  );
  let HomeComponent = screen.getByRole("button", { name: /Jugar !/i });

  expect(HomeComponent).toBeInTheDocument();
});

test("renders game component", () => {
  const user = {
    name: "Jhon",
    points: 0,
    bestScore: 0,
  };

  render(
    <MemoryRouter initialEntries={["/game"]}>
      <Game user={user} />
    </MemoryRouter>
  );
  let GameComponent = screen.getByRole("heading", {
    name: /Player: Jhon , score: 0/i,
  });

  expect(GameComponent).toBeInTheDocument();
});
