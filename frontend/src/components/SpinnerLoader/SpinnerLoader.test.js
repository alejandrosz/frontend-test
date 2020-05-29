import React from "react";
import { shallow } from "enzyme";
import SpinnerLoader from "./SpinnerLoader";

describe("SpinnerLoader", () => {
  it("renders", () => {
    shallow(<SpinnerLoader />);
  });
});
