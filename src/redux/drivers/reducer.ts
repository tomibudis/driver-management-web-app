import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

interface DataDriver {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    medium: string;
  };
}
export interface DriversState {
  results?: DataDriver[];
  data?: DataDriver[];
  info?: {
    results: number;
    page: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

const initialState: DriversState = {
  results: [],
  data: [],
  info: {
    results: null,
    page: 1,
    hasNext: true,
    hasPrev: false,
  },
};

const LIMIT_DISPLAY = 5;

export const driversReducer = createSlice({
  name: "drivers",
  initialState,
  reducers: {
    setDrivers: (state, action: PayloadAction<DriversState>) => {
      state.info = {
        ...state.info,
        ...action.payload.info,
      };
      state.results = action.payload.results;
      state.data = action.payload.results?.slice(0, LIMIT_DISPLAY);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.info.page = action.payload;
      state.info.hasNext =
        state.info?.results - action.payload * LIMIT_DISPLAY > 0;
      state.info.hasPrev = LIMIT_DISPLAY !== action.payload * LIMIT_DISPLAY;
      state.data = state.results?.slice(
        // eslint-disable-next-line prettier/prettier
        action.payload * LIMIT_DISPLAY - LIMIT_DISPLAY,
        action.payload * LIMIT_DISPLAY
      );
    },
    searchDriver: (state, action: PayloadAction<string>) => {
      state.data = _.isEmpty(action.payload)
        ? state.results?.slice(0, LIMIT_DISPLAY)
        : _.filter(state.results, (result) =>
            result.name?.first?.includes(action.payload)
          );
    },
  },
});

export const { setDrivers, setCurrentPage, searchDriver } =
  driversReducer.actions;

export default driversReducer.reducer;
