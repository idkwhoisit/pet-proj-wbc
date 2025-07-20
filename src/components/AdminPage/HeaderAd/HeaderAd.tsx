import React from "react";
import { Link } from "react-router-dom";
import s from "./HeaderAd.module.scss";

export const HeaderAd = () => {
    return (
        <div className={s.wrapper}>
            <Link to={"/"}>home</Link>
        </div>
    );
};
