import { createStore, compose } from "redux";
import { persistStore } from "redux-persist";
import Reducers from "<%= name %>/App/Reducers";
import Middleware from "<%= name %>/App/Store/Middleware";

export const store = createStore(Reducers, compose(Middleware));
export const persistor = persistStore(store);
