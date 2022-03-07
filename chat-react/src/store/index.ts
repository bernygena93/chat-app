import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ChannelsReducer from "./reducers/channels.reducer";

const RootReducer = combineReducers({
  channels: ChannelsReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const store = createStore(RootReducer, applyMiddleware(thunk));
