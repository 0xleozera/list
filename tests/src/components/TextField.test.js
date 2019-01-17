import React from "react";
import { create } from "react-test-renderer";
import TextField from "../../../src/components/TextField";

describe("[Component] TextField", () => {
  const props = {
    onChange: jest.fn(),
    value: "",
    icon: ""
  };

  const tree = create(<TextField {...props} />);

  it("matches snapshot", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("calls onChange prop", () => {
    tree.root.props.onChange();
    expect(props.onChange).toHaveBeenCalled();
  });
});
