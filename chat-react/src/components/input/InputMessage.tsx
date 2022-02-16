import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styles from "./inputMessage.module.scss";

function InputMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <textarea
          className={styles.input}
          placeholder="Escribi tu mensaje aqui.."
          rows={1}
        />
        <button className={styles.button} type="button">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default InputMessage;
