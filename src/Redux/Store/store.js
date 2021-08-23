import {createStore} from "redux";
import appReducers from "../Reducers/reducer";

const store = createStore(appReducers);

export default store;