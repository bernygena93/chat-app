import React from "react";
import styles from "./channel.module.scss";
import IChannel from "./types.d";

type ChannelProps = {
  channel: IChannel;
};

function Channel({ channel }: ChannelProps) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>CH</div>
      <div className={styles.name}>{channel.name}</div>
    </div>
  );
}

export default Channel;
