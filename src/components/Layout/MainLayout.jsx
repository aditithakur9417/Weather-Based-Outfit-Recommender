import React from "react";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout" style={{ minHeight: "100vh" }}>
      <Header />
      <main
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
