import { configureStore } from "@reduxjs/toolkit";
import reducer from "<%= name %>/App/Reducers";
import middleware from "<%= name %>/App/Store/Middleware";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(middleware),
});

export const persistor = persistStore(store);
