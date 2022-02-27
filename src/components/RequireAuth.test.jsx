import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RequireAuth from "./RequireAuth";

const MockName = "<Login />";
const mockedUsedNavigate = MockName;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => mockedUsedNavigate,
}));

test("<RequireAuth />", () => {
  render(
    <MemoryRouter>
      <RequireAuth redirectTo="/" user={null}>
        <div className="component"></div>
      </RequireAuth>
    </MemoryRouter>
  );

  expect(mockedUsedNavigate).toEqual("<Login />");
});

test("<RequireAuth />", () => {
  render(
    <MemoryRouter>
      <RequireAuth redirectTo="/" user="jhon">
        <div className="component"></div>
      </RequireAuth>
    </MemoryRouter>
  );

  expect(mockedUsedNavigate).toEqual("<Login />");
});
