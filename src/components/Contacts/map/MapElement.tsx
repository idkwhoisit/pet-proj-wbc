import React from "react";
import s from "./Map.module.scss";

export const MapElement = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.mapSection}>
                <iframe
                    title="westBikeCustoms"
                    src="https://yandex.ru/map-widget/v1/?ll=37.041618%2C55.594754&mode=search&oid=123416346868&ol=biz&z=13.69&size=400,400"
                    className={s.mapElement}
                ></iframe>
            </div>
        </div>
    );
};
