import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/user-reducer";

const rootReducer = combineReducers({
  users: userReducer,
  // другие редьюсеры, если есть
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
