import { combineReducers } from "redux";
import { api } from "../Api/rtkApi";


export default combineReducers({
    [api.reducerPath]: api.reducer,
    // remaining reducers
  });