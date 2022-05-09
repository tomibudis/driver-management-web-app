import React from "react";
import { render, screen } from "~utils/test-utils";

import Card from "../index";

describe("<Card />", () => {
  it("render card component", () => {
    render(<Card driverId="1234">Testing</Card>);

    const children = screen.getByText("Testing");
    expect(children).toBeInTheDocument();
  });
  it("render driver id correctly", () => {
    render(<Card driverId="1234">Testing</Card>);
    const driverId = screen.getByText("1234");
    expect(driverId).toBeInTheDocument();
  });
  it("matched with a snapshot", () => {
    const { container } = render(<Card driverId="1234">Testing</Card>);
    expect(container).toMatchSnapshot();
  });
});
