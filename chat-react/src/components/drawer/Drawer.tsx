import React from "react";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./drawer.module.scss";
import Search from "../search/Search";
import channels from "../../json/channels.json";
import user from "../../json/user.json";
import Channel from "../channel/Channel";

function Drawer() {
  return (
    <div className={styles.container}>
      <div className={styles.closeButton}>
        <ClearIcon />
      </div>
      <div className={styles.header}>
        <h2>Channels</h2>
        <AddIcon className={styles.icon} />
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.body}>
        {channels.map((channel) => (
          <Channel channel={channel} />
        ))}
      </div>
      <div className={styles.user}>
        <div className={styles.avatar}>WG</div>
        <div className={styles.name}>
          {user.name}
          &nbsp;
          {user.lastname}
        </div>
        <KeyboardArrowUpIcon className={styles.iconUser} />
      </div>
    </div>
  );
}

export default Drawer;
