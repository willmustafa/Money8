import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import logo from "../../../../../public/logo.png";
import logoCollapsed from "../../../../../public/logo-collapsed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { SidebarProps } from "./Sidebar.dto";

function Sidebar({isOpen}: SidebarProps) {
  const routes: LiProps[] = [
    {
      name: "Dashboard",
      icon: "home",
      link: '/'
    },
    {
      name: "Transações",
      icon: "tasks",
      link: 'transacoes'
    },
    {
      name: "Contas",
      icon: "university",
      link: 'contas'
    },
    {
      name: "Cartões",
      icon: "credit-card",
      link: 'cartoes'
    },
    {
      name: "Objetivos",
      icon: "bullseye",
      link: 'objetivos'
    },
    {
      name: "Categorias",
      icon: "tags",
      link: 'categorias'
    },
    {
      name: "Tags",
      icon: "hashtag",
      link: 'tags'
    },
  ];

  const sidebarClass = isOpen ? styles.expanded : "";

  return (
    <div className={`${styles.sidebar} ${sidebarClass}`}>
      <div className={styles["logo-container"]}>
        {isOpen ? (<Image src={logo} alt="Logo" />): (<Image src={logoCollapsed} alt="Logo" />)}
        
        
      </div>
      <div className={styles.menu}>
        {routes.map((route, index) => (
          <Li {...route} key={index} />
        ))}
      </div>
    </div>
  );
}

interface LiProps {
  icon: IconName;
  name: string;
  link: string;
}

function Li({ icon, name, link }: LiProps) {
  return (
    <Link href={link}>
      <i>
        <FontAwesomeIcon icon={["fas", icon]} />
      </i>
      <span>{name}</span>
    </Link>
  );
}

export default Sidebar;
