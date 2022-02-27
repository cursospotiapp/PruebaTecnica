import React from "react";
import { useDelay } from "./useDelay";

test("Delay return true", async () => {
  const setStateMock = jest.fn();
  const useStateMock = (useState) => [true, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  const useRefeMock = (useRef) => jest.fn();
  jest.spyOn(React, "useRef").mockImplementation(useRefeMock);

  jest.spyOn(React, "useEffect").mockImplementation((f) => f());

  const [isStop] = useDelay(100);

  expect(isStop).toBe(true);
});

test("Delay return false", async () => {
  const setStateMock = jest.fn();
  const useStateMock = (useState) => [false, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  const useRefeMock = (useRef) => jest.fn();
  jest.spyOn(React, "useRef").mockImplementation(useRefeMock);

  jest.spyOn(React, "useEffect").mockImplementation((f) => f());

  const [isStop] = useDelay(100);

  expect(isStop).toBe(false);
});
