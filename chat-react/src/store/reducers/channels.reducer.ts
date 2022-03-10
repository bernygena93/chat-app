import { Reducer } from "redux";
import IChannel from "../../components/channel/types.d";
import { ADD_CHANNEL } from "../actions/channels.action";

type ActionType = {
  type: String;
  payload: IChannel;
};

type State = {
  channels: Array<IChannel>;
};

const initialState = {
  channels: [],
};

const ChannelsReducer: Reducer<State, ActionType> = (
  state: State = initialState,
  action: ActionType,
): State => {
  switch (action.type) {
    case ADD_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.payload],
      };
    default:
      return state;
  }
};

export default ChannelsReducer;
