import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEmailList } from "../../services/emailList";

export const getEmails = createAsyncThunk("emails/fetch", async (pageNo) => {
  const data = await getEmailList(pageNo);
  console.log({ data });
  return data;
});

const initialState = {
  status: "IDLE",
  errorMessage: null,
  emailList: [],
  totalRecords: 0,
};

const emailSlice = createSlice({
  name: "emails",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getEmails.pending, (state) => {
        state.status = "LOADING";
        state.errorMessage = null;
        state.emailList = [];
        state.totalRecords = 0;
      })
      .addCase(getEmails.fulfilled, (state, action) => {
        const { list, total } = action.payload;
        state.status = "SUCCEEDED";
        state.errorMessage = null;
        state.emailList = list;
        state.totalRecords = total;
      })
      .addCase(getEmails.rejected, (state, action) => {
        state.status = "FAILED";
        state.errorMessage = action.error.message;
        state.emailList = [];
        state.totalRecords = 0;
      });
  },
});

export default emailSlice.reducer;
