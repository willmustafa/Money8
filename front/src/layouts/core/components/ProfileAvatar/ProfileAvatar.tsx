import React from "react";
import styles from "./ProfileAvatar.module.css";
import { useSelector } from "react-redux";
import { selectUserState } from "@/store/user.slice";

interface ProfileAvatar {
  imageUrl?: string | null;
}

export default function ProfileAvatar({ imageUrl }: ProfileAvatar) {
  const currentUser = useSelector(selectUserState);
  const nameSplit = currentUser?.displayName?.split(" ");
  const initials = `${nameSplit?.[0][0]}${
    nameSplit?.[nameSplit.length - 1][0]
  } `;

  return (
    <>
      {imageUrl ? (
        <div
          className={styles.imgInner}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      ) : (
        <div className={styles.profileInitial}>{initials.toUpperCase()}</div>
      )}
    </>
  );
}
