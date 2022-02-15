import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./drawer.module.scss";
import ChannelMenu from "./ChannelMenu";
import User from "../user/User";
import Menu from "./Menu";

type DrawerProps = {
  drawerOpen: boolean;
  drawerToggle: Function;
};

function Drawer({ drawerOpen, drawerToggle }: DrawerProps) {
  const activeDrawer = drawerOpen && styles.containerOpen;
  const [channelSelected, setChannelSelected] = useState(false);

  const handlerChannelSelected = () => {
    setChannelSelected(!channelSelected);
  };

  return (
    <div className={`${styles.container} ${activeDrawer}`}>
      <div className={styles.closeButton}>
        <ClearIcon onClick={() => drawerToggle()} />
      </div>
      {channelSelected ? (
        <ChannelMenu handlerSelected={handlerChannelSelected} />
      ) : (
        <Menu handlerSelected={handlerChannelSelected} />
      )}
      <User />
    </div>
  );
}

export default Drawer;
