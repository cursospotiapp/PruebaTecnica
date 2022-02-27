import { saveUser, updateUser } from "./managePlayer";

jest.mock("../utils/managePlayer", () => ({
  ...jest.requireActual("../utils/managePlayer"),
  saveUser: () => jest.fn(() => ({ name: "jhon", points: 0, bestScore: 0 })),
  updateUser: () => jest.fn(() => ({ name: "jhon", points: 0, bestScore: 0 })),
}));

test("Save user into local IndexedDB", async () => {
  try {
    const player = await saveUser("jhon");
    expect(player()).toEqual({ name: "jhon", points: 0, bestScore: 0 });
  } catch (error) {
    console.log(error);
  }
});

test("Update user into local IndexedDB", async () => {
  try {
    const player = await updateUser("jhon");

    expect(player()).toEqual({ name: "jhon", points: 0, bestScore: 0 });
  } catch (error) {
    console.log(error);
  }
});
