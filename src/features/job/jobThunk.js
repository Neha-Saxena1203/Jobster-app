import customFetch from "../../utils/axios";
import { getAllJobs } from "../allJobs/allJobsSlice";

export const submitJobThunk = async (url, job, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, job);
    return resp.data.msg;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editJobThunk = async (url, job, thunkAPI) => {
  try {
    // console.log(job);
    const resp = await customFetch.patch(url, job);

    return resp.data.msg;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteJobThunk = async (url, thunkAPI) => {
  // thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(url);
    thunkAPI.dispatch(getAllJobs());
    return resp.data;
  } catch (error) {
    // thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
