import Image from "next/image";
import React from "react";
import profile from "@/assets/images/profile.png";
import styles from "./Header.module.css";
import DropdownButton from "../UI/DropdownButton/DropdownButton";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function UserInfo() {
  return (
    <DropdownButton
      button={
        <div className={styles.user_wrapper}>
          <div className={`${styles.user_info} d-none d-md-flex`}>
            <b>Thaila Naga</b>
            <span>Premium</span>
          </div>
          <div className={styles.img_wrapper}>
            <Image src={profile} alt="profile pic" />
          </div>
        </div>
      }
    >
      <DropdownMenuItems />
    </DropdownButton>
  );
}

function DropdownMenuItems() {
  const menuLinks: IMenuItem[] = [
    {
      icon: ["fas", "user"],
      link: "/meu-perfil",
      text: "Meu perfil",
    },
    {
      icon: ["fas", "door-open"],
      link: "/logout",
      text: "Sair",
    },
  ];

  return (
    <ul className="mb-0 p-0">
      {menuLinks.map((menuLink, index) => (
        <_MenuItem key={index} {...menuLink} />
      ))}
    </ul>
  );
}

interface IMenuItem {
  link: string;
  icon: IconProp;
  text: string;
}

function _MenuItem(props: IMenuItem) {
  return (
    <Link href={props.link} className={styles.menuLink}>
      <FontAwesomeIcon icon={props.icon} className={styles.menuIcon} />
      {props.text}
    </Link>
  );
}
