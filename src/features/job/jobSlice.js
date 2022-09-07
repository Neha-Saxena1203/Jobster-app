import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { deleteJobThunk, editJobThunk, submitJobThunk } from "./jobThunk";

const initialState = {
  isLoading: false,
  isEditting: false,
  values: {
    id: "",
    position: "",
    company: "",
    jobLocation: "",
    status: "",
    jobType: "",
  },
};

export const submitJob = createAsyncThunk("job/submitJob", (job, thunkAPI) => {
  return submitJobThunk("/jobs", job, thunkAPI);
});

export const editJob = createAsyncThunk(
  "job/editJob",
  ({ jobId, job }, thunkAPI) => {
    return editJobThunk(`/jobs/${jobId}`, job, thunkAPI);
  }
);

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  ({ jobId }, thunkAPI) => {
    return deleteJobThunk(`/jobs/${jobId}`, thunkAPI);
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setEditting: (state, { payload }) => {
      state.isEditting = true;
      state.values = {
        id: payload._id,
        position: payload.position,
        company: payload.company,
        jobLocation: payload.jobLocation,
        status: payload.status,
        jobType: payload.jobType,
      };
    },
  },
  extraReducers: {
    [submitJob.pending]: (state) => {
      state.isLoading = true;
    },
    [submitJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Job created!");
    },
    [submitJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [editJob.pending]: (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false;
      state.isEditting = false;
      toast.success("Job modified...");
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJob.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload);
    },
    [deleteJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { setEditting } = jobSlice.actions;
export default jobSlice.reducer;
