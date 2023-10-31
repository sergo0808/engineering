import React from "react";
import Header from "../Header/Header";
import StylesHome from "./Home.module.css";
import imgCircle from "../../images/Круг крутится.svg";
import btn_1 from "../../images/1.svg";
import btn_2 from "../../images/2.svg";
import btn_3 from "../../images/3.svg";
import btn_4 from "../../images/4.svg";
import btn_5 from "../../images/5.svg";
import btn_6 from "../../images/6.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className={StylesHome.main}>
      <Header />
      <div className={StylesHome.home}>
        <h1 className={StylesHome.title}>Инженерно- строительные изыскания</h1>
        <p className={StylesHome.text}>
          Подразделения организации укомплектованы высококвалифицированными специалистами, оснащены
          новейшим оборудованием и используют современные методы производства и обработки
          материалов.
        </p>
        <div className={StylesHome.circle}>
          <img className={StylesHome.img} src={imgCircle} alt="Круг" />
        </div>
      </div>
      <ul className={StylesHome.lists}>
        <li className={StylesHome.list}>
          <NavLink>
            <img src={btn_1} />
          </NavLink>
        </li>
        <li className={StylesHome.list}>
          <NavLink>
            <img src={btn_2} />
          </NavLink>
        </li>
        <li className={StylesHome.list}>
          <NavLink>
            <img src={btn_3} />
          </NavLink>
        </li>
        <li className={StylesHome.list}>
          <NavLink>
            <img src={btn_4} />
          </NavLink>
        </li>
        <li className={StylesHome.list}>
          <NavLink>
            <img src={btn_5} />
          </NavLink>
        </li>
        <li className={StylesHome.list}>
          <NavLink>
            <img src={btn_6} />
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Home;
