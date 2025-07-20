import React from "react";
import s from "./Footer.module.scss";
import logo from "../../images/logo.png";

export const Footer = () => {
    return (
        <div className={s.bgWrapper}>
            <div className={s.wrapper}>
                <div className={s.logoWrapper}></div>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};
