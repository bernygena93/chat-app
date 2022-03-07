// import IChannel from "../../components/channel/types.d";
import { ADD_CHANNEL } from "../actions/channels.action";

/* type ActionType = {
  type: String;
  payload: IChannel;
}; */

const initialState = {
  channels: [],
};

const ChannelsReducer = (action: any, state = initialState) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default ChannelsReducer;
