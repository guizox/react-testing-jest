import React from "react";
import ReactDom from "react-dom";
import Button from "./index";
import { render, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

beforeEach(() => {
  cleanup();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(
    <Button onClick={() => console.log("click")} label="teste" />,
    div
  );
});

it("renders button correctly with teste", () => {
  const { getByTestId } = render(
    <Button onClick={() => console.log("click")} label="teste" />
  );
  expect(getByTestId("button")).toHaveTextContent("teste");
});

it("renders button correctly with Save", () => {
  const { getByTestId } = render(
    <Button onClick={() => console.log("click")} label="Save" />
  );
  expect(getByTestId("button")).toHaveTextContent("Save");
});

it("matches snapshot 1", () => {
  const tree = renderer
    .create(<Button onClick={() => console.log("click")} label="Save" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer
    .create(
      <Button onClick={() => console.log("click")} label="clcik me please" />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
