import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/grid/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});