import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";
import "../setupTest";
import CardList from "./CardList";

it("expect to render card component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "pedro diaz",
      username: "pjdux",
      email: "pjdux@gmail.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
