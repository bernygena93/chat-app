import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./header.module.scss";

type HeaderProps = {
  drawerToggle: Function;
};

function Header({ drawerToggle }: HeaderProps) {
  return (
    <div className={styles.container}>
      <MenuIcon className={styles.title} onClick={() => drawerToggle()} />
      <h1 className={styles.title}>NOMBRE DEL CANAL</h1>
    </div>
  );
}

export default Header;
