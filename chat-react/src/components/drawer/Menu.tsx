import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import styles from "./drawer.module.scss";
import Search from "../search/Search";
import Channel from "../channel/Channel";
import { RootState } from "../../store";
import IChannel from "../channel/types.d";

type MenuProps = {
  handlerSelected: Function;
  setView: Function;
  drawerToggle: Function;
};

function Menu({ handlerSelected, setView, drawerToggle }: MenuProps) {
  const channels = useSelector((state: RootState) => state.channels.channels);

  const handleViewModalandDrawer = () => {
    drawerToggle();
    setView(true);
  };
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Channels</h2>
        <AddIcon
          className={styles.icon}
          onClick={() => handleViewModalandDrawer()}
        />
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.body}>
        {channels.map((channel: IChannel) => (
          <Channel
            channel={channel}
            key={channel.id.toString()}
            onclick={handlerSelected}
          />
        ))}
      </div>
    </>
  );
}

export default Menu;
