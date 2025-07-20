import React from "react";
import { MainBlock } from "../mainBlock/MainBlock";
import logo from "../../logo.png";

import s from "./MainSection.module.scss";

export const MainSection = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.wrapperMainSection}>
                <img src={logo} className={s.AppLogo} alt="logo" />
                <MainBlock />
            </div>
            <p className={s.subtitle}>Совершенство в каждой секунде, и все такое... </p>
        </div>
    );
};
