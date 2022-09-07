import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    // console.log(resp);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const getStatsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
