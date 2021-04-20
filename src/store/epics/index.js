import { combineEpics } from "redux-observable";
import userTweets from "./fetchUserTweetsEpic";

const rootEpic = combineEpics(
  ...userTweets
);

export default rootEpic;
