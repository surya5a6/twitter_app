import { useState } from "react";
import * as actions from "./store/actions/actions";
import { getStore } from "./store/index";
import { FETCH_USER_TWEETS} from "./store/constants";

const store = getStore();

export default function App() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    store.dispatch({
      type: FETCH_USER_TWEETS,
      payload: value
    });
  };
  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleClick}>
        Get Tweets
      </button>
    </form>
  );
}
