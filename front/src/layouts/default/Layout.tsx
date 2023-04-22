import { selectSidebarState } from "@/store/sidebar.slice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../core/components/Header/Header";
import Sidebar from "../core/components/Sidebar/Sidebar";
import styles from "./Layout.module.css";
import Offcanvas from "../core/components/Offcanvas/Offcanvas";
import { AnimatePresence } from "framer-motion";
import TransactionButton from "../core/components/TransactionButton/TransactionButton";

const Layout = ({ children }: React.PropsWithChildren) => {
  const isSidebarOpen = useSelector(selectSidebarState);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar />
      <AnimatePresence>
        {showOffcanvas && (
          <Offcanvas handler={() => setShowOffcanvas(!showOffcanvas)}>
            oi
          </Offcanvas>
        )}
      </AnimatePresence>
      <TransactionButton onClick={() => setShowOffcanvas(!showOffcanvas)} />
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
