import s from "./AdminPage.module.scss";

import { HeaderAd } from "./HeaderAd/HeaderAd";

export const AdminPage = () => {
    return (
        <div className={s.wrapper}>
            <HeaderAd />
            AdminPage
            <p>lorem</p>
        </div>
    );
};
