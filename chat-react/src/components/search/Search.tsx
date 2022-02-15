import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./search.module.scss";

function Search() {
  return (
    <div className={styles.container}>
      <SearchIcon className={styles.icon} />
      <input className={styles.input} type="text" placeholder="Search..." />
    </div>
  );
}

export default Search;
