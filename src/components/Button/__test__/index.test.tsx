import React from "react";
import { COLORS } from "~constants/index";
import { render, screen } from "~utils/test-utils";

import Button from "../index";

describe("<Button />", () => {
  it("render button component", () => {
    render(<Button variant="primary">Button Test</Button>);

    const children = screen.getByText("Button Test");
    expect(children).toBeInTheDocument();
  });

  it("render variant primary", () => {
    render(<Button variant="primary">Button Test</Button>);
    const button = screen.getByText("Button Test");
    expect(button).toHaveStyle(`background: ${COLORS.RED}`);
  });

  it("render variant link", () => {
    render(<Button variant="link">Button Test</Button>);
    const button = screen.getByText("Button Test");
    expect(button).toHaveStyle(`background: none`);
  });

  it("matched with a snapshot", () => {
    const { container } = render(
      <Button variant="primary">Button Test</Button>
    );
    expect(container).toMatchSnapshot();
  });
});
