import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import logo from "../../../../../public/logo.png";
import logoCollapsed from "../../../../../public/logo-collapsed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux";
import { selectSidebarState } from "@/store/sidebar.slice";
import { useRouter } from "next/router";

function Sidebar() {
  const routes: LiProps[] = [
    {
      name: "Dashboard",
      icon: "home",
      link: '/dashboard'
    },
    {
      name: "Transações",
      icon: "tasks",
      link: '/dashboard/transacoes'
    },
    {
      name: "Contas",
      icon: "university",
      link: '/dashboard/contas'
    },
    {
      name: "Cartões",
      icon: "credit-card",
      link: '/dashboard/cartoes'
    },
    {
      name: "Objetivos",
      icon: "bullseye",
      link: '/dashboard/objetivos'
    },
    {
      name: "Categorias",
      icon: "tags",
      link: '/dashboard/categorias'
    },
    {
      name: "Tags",
      icon: "hashtag",
      link: '/dashboard/tags'
    },
  ];
  const isOpen = useSelector(selectSidebarState)

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
  const router = useRouter();
  
  return (
    <Link href={link} className={router.pathname == `${link}` ? styles.menuActive : ""}>
      <i>
        <FontAwesomeIcon icon={["fas", icon]} />
      </i>
      <span>{name}</span>
    </Link>
  );
}

export default Sidebar;
