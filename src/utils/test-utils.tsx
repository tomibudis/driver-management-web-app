import React from "react";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit"; // for redux-toolkit
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import driversReducer from "../redux/drivers/reducer";

import { RootState } from "../redux/store";
import mockDriversJson from "../views/driver-management/__test__/mock-drivers.json";

type ReduxRenderOptions = {
  preloadedState?: RootState;
  store?: EnhancedStore;
  renderOptions?: Omit<RenderOptions, "wrapper">;
};

function render(
  ui: ReactElement,
  {
    preloadedState = {
      drivers: {
        results: mockDriversJson.results,
        data: mockDriversJson?.results,
      },
    },
    store = configureStore({
      reducer: { drivers: driversReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ReduxRenderOptions = {}
): RenderResult {
  function Wrapper({ children }: { children?: ReactNode }): ReactElement {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
