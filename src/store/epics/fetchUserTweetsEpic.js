import { ofType } from "redux-observable";
import { from } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { FETCH_USER_TWEETS, BEARER_TOKEN } from "../constants";
import { fetchUserTweetsFullfilled } from "../actions/actions";
import Twit from 'twit';

const T = new Twit({
  cosumer_key: "lHGb4zGhpepih2IZwJBCBLpdx",
  consumer_secret:
    "Jw0SyVTmG8rsxZwZtp0ER0dgC8atEpcKOsqiDc2e3HxfnwK4dN",
  access_token: "1384033935441596419-EhAbzDWG6dHSnC8JBHatXmPOSlG61r",
  token_secret: "taWGp1Piugtygn0aXloY52E2HOsTtFJENsW5RvHPZly5L",

})

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})


const fetchUserTweetsEpic = (action$) => {
  return action$.pipe(
    ofType(FETCH_USER_TWEETS),
    mergeMap((action) => {
      const getRequest = (user) => {
        const request = fetch(`https://api.twitter.com/2/items/${user}`, {
          method: "GET",
          headers: {
            cosumer_key: "lHGb4zGhpepih2IZwJBCBLpdx",
            consumer_secret:
              "Jw0SyVTmG8rsxZwZtp0ER0dgC8atEpcKOsqiDc2e3HxfnwK4dN",
            access_token: "1384033935441596419-EhAbzDWG6dHSnC8JBHatXmPOSlG61r",
            token_secret: "taWGp1Piugtygn0aXloY52E2HOsTtFJENsW5RvHPZly5L",
            Authorization: BEARER_TOKEN
          }
        });
        return from(request);

        // need to update the request
      };
      return getRequest(action.user).pipe(
        map((payload) => {
          console.log(payload)
          fetchUserTweetsFullfilled(payload)
        })
      );
    })
  );
};

const userTweets = [fetchUserTweetsEpic];
export default userTweets;
