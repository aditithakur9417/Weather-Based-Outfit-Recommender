import React from "react";
import Header from "../Header/Header";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
