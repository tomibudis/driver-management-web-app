import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { waitFor, render, screen } from "~utils/test-utils";

import DriverManagement from "../index";
import mockDriverJson from "./mock-drivers.json";

export const handlers = [
  rest.get("https://randomuser.me/api", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDriverJson));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("<DriverManagement />", () => {
  it("render driver management view", async () => {
    render(<DriverManagement />);
    await waitFor(() => {
      screen.getByText("Lærke Møller");
    });
    expect(await screen.findByText(/Lærke Møller/i)).toBeInTheDocument();
  });
  it("matched with a snapshot", () => {
    const { container } = render(<DriverManagement />);
    expect(container).toMatchSnapshot();
  });
});
