import { selectSidebarState } from "@/store/sidebar.slice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../core/components/Header/Header";
import Sidebar from "../core/components/Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }: React.PropsWithChildren) => {
  const isSidebarOpen = useSelector(selectSidebarState)

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main
        className={`${styles.main} ${isSidebarOpen ? styles.sidebar_open : ""}`}
      >
        <Header />
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
