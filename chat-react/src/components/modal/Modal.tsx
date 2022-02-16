import React from "react";
import styles from "./modal.module.scss";

type ModalProps = {
  setView: Function;
};

function Modal({ setView }: ModalProps) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <span>NEW CHANNEL</span>
        </div>
        <div className={styles.info}>
          <input
            type="text"
            className={styles.input}
            placeholder="Channel name"
          />
          <textarea
            className={styles.input}
            rows={5}
            placeholder="Channel description"
          />
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            type="button"
            onClick={() => setView(false)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
