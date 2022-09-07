import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk, getStatsThunk } from "./allJobsThunk";

const initialState = {
  isLoading: false,
  allJobs: [],
  numOfPages: 0,
  totalJobs: 0,
  page: 1,
  allStats: [],
  monthlyApplications: [],

  search: "",
  status: "all",
  jobType: "all",
  sort: "latest",
};

export const getAllJobs = createAsyncThunk(
  "allJobs/getAllJobs",
  (_, thunkAPI) => {
    const { search, page, status, jobType, sort } = thunkAPI.getState().allJobs;

    let url = `/jobs?search=${search}&status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`;

    return getAllJobsThunk(url, thunkAPI);
  }
);

export const getStats = createAsyncThunk("allJobs/getStats", (_, thunkAPI) => {
  return getStatsThunk("/jobs/stats", thunkAPI);
});

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    clearFilters: (state) => {
      state.search = "";
      state.status = "all";
      state.jobType = "all";
      state.sort = "all";
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.allJobs = payload.jobs;
      state.numOfPages = payload.numOfPages;
      state.totalJobs = payload.totalJobs;
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getStats.pending]: (state) => {
      state.isLoading = true;
    },
    [getStats.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.allStats = payload.defaultStats;
      state.monthlyApplications = payload.monthlyApplications;
    },
    [getStats.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
} = allJobsSlice.actions;
export default allJobsSlice.reducer;
