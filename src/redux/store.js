import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { userApi } from "./services/userApi";
import { meApi } from "./services/meApi";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[userApi.reducerPath]: userApi.reducer,
		[meApi.reducerPath]: meApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([userApi.middleware, meApi.middleware]),
});
