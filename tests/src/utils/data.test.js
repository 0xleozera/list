import data from "../../../src/utils/data";

describe("[Util] Data", () => {
  it("matches initial data", () => {
    expect(data).toHaveLength(10);
  });
});
