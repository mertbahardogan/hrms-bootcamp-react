import { combineReducers } from "redux";
import favouriteReducer from "./reducers/favouriteReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
});

export default rootReducer;
