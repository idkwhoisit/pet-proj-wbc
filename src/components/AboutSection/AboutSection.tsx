import s from "./AboutSection.module.scss";

export const AboutSection = () => {
    return (
        <div className={s.bgWrapper}>
            <div className={s.wrapper}>
                <div className={s.mainTitle} id={"aboutSection"}>
                    О нас
                </div>
                <div className={s.discription}>Мы а*уенные</div>
                <ul className={s.list}>
                    <li>мы круче наших конкурентов в 1000000000000раз</li>
                    <li>мы е*ать как а*уенно делаем велики </li>
                    <li>все наши клиенты е*ать в каком а*уе от результата </li>
                    <li>да и мы тоже в а*уе от того что мы делаем </li>
                </ul>
            </div>
        </div>
    );
};
