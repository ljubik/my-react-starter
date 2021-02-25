import React from "react";
import style from "./Header.module.css";


const Header = function () {
  return (
    <header className={style.header}>
      <nav>
        <a href="#">Header</a>
      </nav>
    </header>
  );
};

export default Header;
