import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <MenuIcon className={styles.title} />
      <h1 className={styles.title}>NOMBRE DEL CANAL</h1>
    </div>
  );
}

export default Header;
