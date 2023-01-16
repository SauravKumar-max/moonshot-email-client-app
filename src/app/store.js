import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "../features/emails/emailSlice";

export const store = configureStore({
  reducer: {
    emails: emailReducer,
  },
});
