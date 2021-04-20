import { FETCH_USER_TWEETS, FETCH_USER_TWEETS_FULFILLED } from "../constants";


// export const fetchUserTweets = (userName) => ({
//   type: FETCH_USER_TWEETS,
//   payload: userName
// });

export const fetchUserTweetsFullfilled = (tweets) => ({
  type: FETCH_USER_TWEETS_FULFILLED,
  payload: tweets
});
