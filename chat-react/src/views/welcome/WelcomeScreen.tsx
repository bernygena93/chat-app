import React from "react";
import styles from "./welcomeScreen.module.scss";

function WelcomeScreen() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Bienvenido a Chat-App</span>
    </div>
  );
}

export default WelcomeScreen;
