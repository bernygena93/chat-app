import { Dispatch } from "redux";
import IMember from "../../components/member/types.d";

export const ADD_CHANNEL = "ADD_CHANNEL";
export const LOAD_CHANNELS = "LOAD_CHANNELS";

export const addChannel = (
  name: String,
  description: String,
  members: Array<IMember>,
  // eslint-disable-next-line arrow-body-style
) => {
  return (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ADD_CHANNEL,
        payload: {
          id: Math.random(),
          name,
          description,
          members,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
