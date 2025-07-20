import { PriceSlider } from "../../common/PriceSlider/PriceSlider";
import s from "./PriceSection.module.scss";

export const PriceSection = () => {
    return (
        <div className={s.wrapper}>
            <div id={"price"} className={s.mainTitle}>
                Прайс
            </div>
            <div className={s.slideSection}>
                <PriceSlider />
            </div>
        </div>
    );
};
