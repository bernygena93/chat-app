import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import styles from "./drawer.module.scss";
import Member from "../member/Member";
import IMember from "../member/types.d";
import { RootState } from "../../store";

type ChannelMenuProps = {
  handlerSelected: Function;
};
function ChannelMenu({ handlerSelected }: ChannelMenuProps) {
  const channels = useSelector((state: RootState) => state.channels.channels);

  return (
    <>
      <div className={styles.header}>
        <ArrowBackIosIcon
          className={styles.userIcon}
          onClick={() => handlerSelected()}
        />
        <h2 className={styles.title}>All Channels</h2>
      </div>
      <div className={styles.nameContainer}>
        <h3 className={styles.name}>{channels[0].name}</h3>
      </div>
      <div className={styles.description}>{channels[0].description}</div>
      <div className={styles.nameContainer}>
        <h3 className={styles.name}>Members</h3>
      </div>
      <div className={styles.bodyMembers}>
        {channels[0].members.map((member: IMember) => (
          <Member member={member} />
        ))}
      </div>
    </>
  );
}

export default ChannelMenu;
