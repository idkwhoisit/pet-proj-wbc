import Carousel from "react-bootstrap/Carousel";
import s from "./PriceSlider.module.scss";

import { useAppSelector } from "../../redux/appHooks";

import ModalDescription from "./Modal/Modal";

export function PriceSlider() {
    const data = useAppSelector((state) => state.slider.data);

    return (
        <Carousel className={s.slider} pause="hover" interval={3500}>
            {data.map((el) => (
                <Carousel.Item className={s.sliderItem} interval={3500}>
                    <div className={s.planBody}>
                        <div className={s.plan__types}>
                            {data[el.id].couroselItems.map((el) => (
                                <div className={s.type__column}>
                                    <div className={s.plan__name}>{el.planName}</div>
                                    <div className={s.tr}>
                                        <div className={s.imageSection}>
                                            <div
                                                style={{
                                                    backgroundImage: `url("${el.imageUrl}")`,
                                                    backgroundPosition: "center",
                                                    backgroundSize: "cover",
                                                    height: "220px",
                                                }}
                                            ></div>
                                        </div>

                                        <div className={s.plan__price}>{el.planPrice}</div>
                                    </div>

                                    <div className={s.modalWrapper}>
                                        <ModalDescription header={el.modalHeader} desctipton={el.desctipton} list={el.list} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
