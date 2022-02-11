import React from "react";
import styles from "./member.module.scss";
import IMember from "./types.d";

type MemberProps = {
  member: IMember;
};
function Member({ member }: MemberProps) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>CH</div>
      <div className={styles.name}>
        {member.name}
        &nbsp;
        {member.lastname}
      </div>
    </div>
  );
}

export default Member;
