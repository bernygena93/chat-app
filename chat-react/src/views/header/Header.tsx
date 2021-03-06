import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./header.module.scss";
import WelcomeScreen from "../welcome/WelcomeScreen";

type HeaderProps = {
  drawerToggle: Function;
};

function Header({ drawerToggle }: HeaderProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <MenuIcon className={styles.title} onClick={() => drawerToggle()} />
        </div>
        <h1 className={styles.title}>NOMBRE DEL CANAL</h1>
      </div>
      <WelcomeScreen />
    </>
  );
}

export default Header;
