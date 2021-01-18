import React from "react";
import ReactDom from "react-dom";
import TextField from "./index";
import { render, cleanup, screen } from "@testing-library/react";
import * as TestUtils from "react-dom/test-utils";

beforeEach(() => {
  cleanup();
});

it("textField should renders", () => {
  const div = document.createElement("div");
  ReactDom.render(<TextField value="teste" />, div);
});

it("renders textfield correctly with jonas", (done) => {
  const { getByTestId, container } = render(<TextField value="jonas" />);

  expect(getByTestId("textfield").querySelector("input")).toHaveValue("jonas");

  TestUtils.Simulate.change(container.querySelector("input"), {
    target: { value: "the-value" },
  });

  expect(getByTestId("textfield").querySelector("input")).toHaveValue(
    "the-value"
  );

  done();
});

it("renders textfield after fire onchange", (done) => {
  const { getByTestId, container } = render(<TextField value="jonas" />);

  TestUtils.Simulate.change(container.querySelector("input"), {
    target: { value: "the-value" },
  });

  expect(getByTestId("textfield").querySelector("input")).toHaveValue(
    "the-value"
  );

  done();
});

it("background should change on click enter", (done) => {
  const { getByTestId, container } = render(<TextField value="" />);

  TestUtils.Simulate.keyPress(container.querySelector("input"), {
    charCode: 13,
  });

  expect(getByTestId("textfield")).toHaveStyle("background: red");

  done();
});

it("background should be white", (done) => {
  const { getByTestId } = render(<TextField value="" />);

  expect(getByTestId("textfield")).toHaveStyle("background: white");

  done();
});
