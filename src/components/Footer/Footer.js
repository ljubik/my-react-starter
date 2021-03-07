import React from "react";
import style from "./Footer.module.css";

const Footer = () => (
  <footer className={style.footer}>
    <p className={(Math.floor(Math.random() * Math.floor(10)) > 5) ? style.even : style.odd}>Copyright 2021</p>
  </footer>
);

export default Footer;
