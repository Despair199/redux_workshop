import { createStore } from "redux";
import { todoReducer } from "../Reducers/Reducers";

const store = createStore(todoReducer)

export default store