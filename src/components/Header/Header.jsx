import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/Nubi Logo.png";
import SearchInput from "../SearchInput/SearchInput";
import UserImage from "../../assets/Mask group.png";
import { ShoppingCart } from "phosphor-react";

export const Header = ( { showSearch = false }) => {
  return (
    <>
      <div className={styles.header}>

        <div>
          <img src={Logo} className={styles.imgLogo}></img>
        </div>

        {showSearch && <SearchInput/>}

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
