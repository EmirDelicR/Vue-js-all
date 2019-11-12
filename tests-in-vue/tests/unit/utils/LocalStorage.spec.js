import localStorage from "localStorage";

describe("Local-Storage-Mock-Test", () => {
  jest.mock("localStorage");
  beforeEach(() => {
    localStorage.clear();
  });

  it("Test setting item on localStorage: ", () => {
    localStorage.setItem("test", "someValue");
    expect(localStorage.getItem("test")).toBe("someValue");
    const storage = localStorage.getFullStorage();
    expect(storage).toMatchObject({ test: "someValue" });
    expect(storage).toHaveProperty("test");
  });

  it("Test if storage is clean on every setup: ", () => {
    const storage = localStorage.getFullStorage();
    expect(storage).toMatchObject({});
  });

  it("Test removing item from storage: ", () => {
    localStorage.setItem("test", "someValue");
    localStorage.removeItem("test");
    const storage = localStorage.getFullStorage();
    expect(storage).toMatchObject({});
  });
});
