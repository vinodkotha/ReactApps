//Mainreducer
import { combineReducers } from "redux";
import movies from "./moviesReducer";
import groceries from "./groceryReducer";

const rootReducer = combineReducers({ movies, groceries });

export default rootReducer;
