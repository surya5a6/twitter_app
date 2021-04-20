import { combineReducers } from "redux";
import { fetchUserTweets } from "./fetchUserTweets";

const rootReducer = combineReducers({
  userTweets: fetchUserTweets
});

export default rootReducer;
