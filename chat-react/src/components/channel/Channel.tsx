import React from "react";
import styles from "./channel.module.scss";
import IChannel from "./types.d";

type ChannelProps = {
  channel: IChannel;
  onclick: Function;
};

function Channel({ channel, onclick }: ChannelProps) {
  return (
    <div className={styles.container} aria-hidden onClick={() => onclick()}>
      <div className={styles.avatar}>CH</div>
      <div className={styles.name}>{channel.name}</div>
    </div>
  );
}

export default Channel;
