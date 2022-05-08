import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DriversState {
  results: {
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
  }[];
  info: {
    results: number;
    page: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

const initialState: DriversState = {
  results: [],
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
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.info.page = action.payload;
      state.info.hasNext =
        state.info?.results - action.payload * LIMIT_DISPLAY > 0;
      state.info.hasPrev = LIMIT_DISPLAY !== action.payload * LIMIT_DISPLAY;
    },
  },
});

export const { setDrivers, setCurrentPage } = driversReducer.actions;

export default driversReducer.reducer;
