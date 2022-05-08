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
  };
}

const initialState: DriversState = {
  results: [],
  info: null,
};

export const driversReducer = createSlice({
  name: "drivers",
  initialState,
  reducers: {
    setDrivers: (state, action: PayloadAction<DriversState>) => {
      state.info = action.payload.info;
      state.results = action.payload.results;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.info.page = action.payload;
    },
  },
});

export const { setDrivers, setCurrentPage } = driversReducer.actions;

export default driversReducer.reducer;
