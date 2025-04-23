import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/Nubi Logo.png";
import SearchInput from "../SearchInput/SearchInput";
import UserImage from "../../assets/Mask group.png";
import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import LogoFocused from "../../assets/Nubi Focused.png";

export const Header = ( { showSearch = false }) => {

  const [ searchFocused, setSearchFocused ] = useState(false);

  return (
    <>
      <div className={styles.header}>

        <div className={styles.boxLogo}>
          <img src={searchFocused ? LogoFocused : Logo} className={`${styles.imgLogo} ${styles.logoTransition}`}></img>
        </div>

        {showSearch && (
        <SearchInput
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          isFocused = {searchFocused}
        />
      )}

        <div className={styles.userBox}>

            <div className={styles.userInfos}>
                <div>
                  <img src={UserImage}  className={styles.imgUser}></img>
                </div>
                <div className={styles.userTxts}>
                  <p>Bem vindo(a)!</p>
                  <p>Entre ou Cadastre-se!</p>
                </div>
            </div>

            <div className={styles.shoppingCart}>
                <ShoppingCart size={36} />
            </div>

        </div>

      </div>
    </>
  );
};
