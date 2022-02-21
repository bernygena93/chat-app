import React, { Fragment } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import channels from "../../json/channels.json";
import styles from "./drawer.module.scss";
import Member from "../member/Member";

type ChannelMenuProps = {
  handlerSelected: Function;
};
function ChannelMenu({ handlerSelected }: ChannelMenuProps) {
  return (
    <>
      <div className={styles.header}>
        <ArrowBackIosIcon
          className={styles.userIcon}
          onClick={() => handlerSelected()}
        />
        <h2 className={styles.title}>All Channels</h2>
      </div>
      <div className={styles.nameContainer}>
        <h3 className={styles.name}>{channels[0].name}</h3>
      </div>
      <div className={styles.description}>{channels[0].description}</div>
      <div className={styles.nameContainer}>
        <h3 className={styles.name}>Members</h3>
      </div>
      <div className={styles.bodyMembers}>
        {channels[0].members.map((member) => (
          <Member member={member} />
        ))}
      </div>
    </>
  );
}

export default ChannelMenu;
