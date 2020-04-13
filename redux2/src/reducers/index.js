import { combineReducers } from "redux";
import articles from "./articlesReducer";
import galleries from "./galleryReducer";

const rootReducers = combineReducers({ articles, galleries });

export default rootReducers;
