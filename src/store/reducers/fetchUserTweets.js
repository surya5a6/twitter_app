import { FETCH_USER_TWEETS_FULFILLED } from "../constants";

const initialState = {
  tweets: []
};

export const fetchUserTweets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_TWEETS_FULFILLED:
      return {
        ...state,
        tweets: [action.payload.tweets]
      };
    default:
      return state;
  }
};
