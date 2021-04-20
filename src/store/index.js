import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducers/index";
import rootEpic from "./epics/index";

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export const getStore = () => {
  return store;
}
