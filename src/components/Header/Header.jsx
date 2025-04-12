import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/Nubi Logo.png";
import SearchInput from "../SearchInput/SearchInput";

export const Header = ( { showSearch = false }) => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <img src={Logo} className={styles.imgLogo}></img>
        </div>
        {showSearch && <SearchInput/>}
      </div>
    </>
  );
};
