import React from "react";
import StylesHeader from "./Header.module.css";
import logo from "../../images/logo.png";
import img__btn from "../../images/email.svg";
import img__menu from "../../images/menu.svg";

const Header = () => {
  return (
    <header className={StylesHeader.header}>
      <div className={StylesHeader.logo__container}>
        <img className={StylesHeader.logo} src={logo} alt="logo" />
        <div className={StylesHeader.logo__company}>
          <p className={StylesHeader.logo__title}>Общество с ограниченной ответственностью</p>
          <p className={StylesHeader.text}>Стандарт Строительства</p>
        </div>
        <div className={StylesHeader.email}>
          <button className={StylesHeader.email__btn}>
            <img className={StylesHeader.btn__image} src={img__btn} alt="кнопка" />
          </button>
          <p className={StylesHeader.email__text}>info@gss-n.ru</p>
        </div>
      </div>
      <div className={StylesHeader.menu}>
        <p className={StylesHeader.number}>+7 (926) 326-47-12</p>
        <p className={StylesHeader.number}>+7 (985) 766-53-80</p>
        <button className={StylesHeader.menu__btn}>
          <img className={StylesHeader.img__menu} src={img__menu} alt="кнопка" />
        </button>
      </div>
    </header>
  );
};

export default Header;
