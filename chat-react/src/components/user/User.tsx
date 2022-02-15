import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import user from "../../json/user.json";
import styles from "./user.module.scss";

function User() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>WG</div>
      <div className={styles.name}>
        {user.name}
        &nbsp;
        {user.lastname}
      </div>
      <KeyboardArrowUpIcon className={styles.iconUser} />
    </div>
  );
}

export default User;
