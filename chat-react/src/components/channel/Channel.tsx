import React, { useEffect } from "react";
import socket from "../../config/socket";
import styles from "./channel.module.scss";
import IChannel from "./types.d";

type ChannelProps = {
  channel: IChannel;
  onclick: Function;
};

function Channel({ channel, onclick }: ChannelProps) {
  const { name } = channel;
  const user = "Walter Genario";

  useEffect(() => {
    socket.emit("room", name, user);
  }, []);

  return (
    <div className={styles.container} aria-hidden onClick={() => onclick()}>
      <div className={styles.avatar}>{channel.name.charAt(0)}</div>
      <div className={styles.name}>{channel.name}</div>
    </div>
  );
}

export default Channel;
