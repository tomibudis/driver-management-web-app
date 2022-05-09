import React from "react";
import { render, screen } from "~utils/test-utils";

import DataRow from "../index";

describe("<DataRow />", () => {
  it("render data row component", () => {
    render(<DataRow label="test label" value="example value" />);

    const children = screen.getByText("example value");
    expect(children).toBeInTheDocument();
  });
  it("render label correctly", () => {
    render(<DataRow label="test label" value="example value" />);
    const labelCard = screen.getByText("test label");
    expect(labelCard).toBeInTheDocument();
  });
  it("matched with a snapshot", () => {
    const { container } = render(
      <DataRow label="test label" value="example value" />
    );
    expect(container).toMatchSnapshot();
  });
});
