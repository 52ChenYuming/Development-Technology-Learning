import { createStore } from "redux";
import langugeReducer from "./languageReducer";

const store = createStore(langugeReducer);

export default store;