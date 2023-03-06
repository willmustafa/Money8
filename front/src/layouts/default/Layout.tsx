import React, { useState } from "react";
import Sidebar from "../core/components/Sidebar/Sidebar";
import styles from "./Layout.module.css"

const Layout = ({ children }: React.PropsWithChildren) => {
  const [isSidebarOpen, toggleSideBarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar isOpen={isSidebarOpen} />
      <main className={`${styles.main} ${isSidebarOpen ? styles.sidebar_open : ''}`}>{children}</main>
    </div>
  );
};

export default Layout;
