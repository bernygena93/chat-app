import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addChannel } from "../../store/actions/channels.action";
import styles from "./modal.module.scss";

type ModalProps = {
  setView: Function;
};

function Modal({ setView }: ModalProps) {
  const [formChannel, setFormChannel] = useState({
    name: "",
    description: "",
    members: [],
  });
  const dispatch = useDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFormChannel({
      ...formChannel,
      [name]: value,
    });
  };

  const createChannel = () => {
    dispatch(
      addChannel(
        formChannel.name,
        formChannel.description,
        formChannel.members,
      ),
    );
    setView(false);
  };

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
            name="name"
            onChange={handleChange}
          />
          <textarea
            className={styles.input}
            rows={5}
            name="description"
            placeholder="Channel description"
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            type="button"
            onClick={createChannel}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
