import React from "react";
import AddIcon from "@mui/icons-material/Add";
import styles from "./drawer.module.scss";
import Search from "../search/Search";
import channels from "../../json/channels.json";
import Channel from "../channel/Channel";

type MenuProps = {
  handlerSelected: Function;
};

function Menu({ handlerSelected }: MenuProps) {
  return (
    <>
      <div className={styles.header}>
        <h2>Channels</h2>
        <AddIcon className={styles.icon} />
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.body}>
        {channels.map((channel) => (
          <Channel
            channel={channel}
            key={channel.id}
            onclick={handlerSelected}
          />
        ))}
      </div>
    </>
  );
}

export default Menu;
