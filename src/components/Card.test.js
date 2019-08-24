import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";
import "../setupTest";

it("expect to render card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
