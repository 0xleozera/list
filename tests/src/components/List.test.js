import React from "react";
import { create } from "react-test-renderer";
import List from "../../../src/components/List";

import data from "../../../src/utils/data";

describe("[Component] List", () => {
  const tree = create(<List data={data} />);

  it("matches snapshot", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("matches initial prop value", () => {
    expect(tree.root.props.data).toEqual(data);
  });
});
