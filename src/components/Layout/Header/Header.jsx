import React from "react";
import ThemeToggle from "../../ThemeToggle";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Outfit Recommender</h2>
      <ThemeToggle />
    </header>
  );
};

export default Header;
