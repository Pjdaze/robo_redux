import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";
import "../setupTest";

it("expect to render card component", () => {
  const mockColor = "#FFFFFF";

  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("expect to increment counter", () => {
  const mockColor = "#FFFFFF";

  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");

  expect(wrapper.state()).toEqual({
    count: 1
  });
});
