import React from "react";
import { create } from "react-test-renderer";
import AlertsScreen from "../../../src/screens/Alerts";

import data from "../../../src/utils/data";

describe("[Component] Alerts", () => {
  const initialState = {
    data,
    value: ""
  };

  const tree = create(<AlertsScreen />);

  it("matches snapshot", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("matches initial state", () => {
    expect(tree.root.instance.state).toEqual(initialState);
  });

  it("matches initial data state", () => {
    expect(tree.root.instance.state.data).toHaveLength(10);
  });

  it("matches to the filtered data", () => {
    tree.root.instance.filterData("brad pitt");
    expect(tree.root.instance.state.data).toHaveLength(5);
  });

  it("matches to the current icon", () => {
    expect(tree.root.instance.getIcon()).toEqual("ios-search");
  });
});
