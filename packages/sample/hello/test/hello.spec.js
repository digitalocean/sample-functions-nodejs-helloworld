const { main } = require("../hello");

describe("Test App", () => {
  test("Hello", () => {
    let response = main({ name: "test_name" });
    expect(response.body).toEqual("Hello test_name!");
  });
});
