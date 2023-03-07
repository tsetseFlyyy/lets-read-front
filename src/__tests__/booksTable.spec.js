import renderer from "react-test-renderer";
import { Component } from "../components/Component";

it("renders correctly", async () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});
