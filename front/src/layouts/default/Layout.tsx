import { selectSidebarState } from "@/store/sidebar.slice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../core/components/Header/Header";
import Sidebar from "../core/components/Sidebar/Sidebar";
import styles from "./Layout.module.css";
import TransactionOffcanvas from "../core/components/TransactionOffcanvas/TransactionOffcanvas";
import { selectUserState } from "@/store/user.slice";
import { useRouter } from "next/router";

const Layout = ({ children }: React.PropsWithChildren) => {
  const isSidebarOpen = useSelector(selectSidebarState);
  const currentUser = useSelector(selectUserState)
  const router = useRouter()

  useEffect(() => {
    if(!currentUser) router.push('/')
  }, []);

  return (
    <div className={styles.layout}>
      <Sidebar />
      <TransactionOffcanvas type="expense" />
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
