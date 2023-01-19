import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getFilterFromLocalStorage,
  setFilterInLocalStorage,
} from "../../helpers/filter";
import { getEmailList } from "../../services/emailList";

export const getEmails = createAsyncThunk("emails/fetch", async (pageNo) => {
  const data = await getEmailList(pageNo);
  return data;
});

const initialState = {
  status: "IDLE",
  errorMessage: null,
  emailList: [],
  totalRecords: 0,
  emailBody: null,
  filterBy: "",
  filteredList: [],
  readIds: getFilterFromLocalStorage("read") ?? [],
  markedFavouriteIds: getFilterFromLocalStorage("favourite") ?? [],
};

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    filterByRead: (state) => {
      const { emailList, readIds } = state;
      state.filteredList = emailList.filter((item) =>
        readIds.includes(item.id)
      );
    },

    filterByUnread: (state) => {
      const { emailList, readIds } = state;
      state.filteredList = emailList.filter(
        (item) => !readIds.includes(item.id)
      );
    },

    filterByFavorites: (state) => {
      const { emailList, markedFavouriteIds } = state;
      state.filteredList = emailList.filter((item) =>
        markedFavouriteIds.includes(item.id)
      );
    },

    selectEmailBody: (state, action) => {
      const { id } = action.payload;
      state.readIds = state.readIds.includes(id)
        ? state.readIds
        : [...state.readIds, id];
      state.emailBody = action.payload;
      setFilterInLocalStorage("read", state.readIds);
    },
  },

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
        state.filteredList = list;
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

export const {
  filterByRead,
  filterByUnread,
  filterByFavorites,
  selectEmailBody,
} = emailSlice.actions;

export default emailSlice.reducer;
