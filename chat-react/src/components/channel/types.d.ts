import IMember from "../member/types.d";

interface IChannel {
  id: Number;
  name: String;
  description: String;
  members: Array<IMember>;
}

export default IChannel;
