import s from "./Contacts.module.scss";
import { MapElement } from "./map/MapElement";

export const Contacts = () => {
    return (
        <div className={s.bgWrapper}>
            <div id={"contacts"} className={s.wrapper}>
                <div className={s.top}>
                    <div className={s.title}>Контакты</div>
                </div>
                <div className={s.bottom}>
                    <MapElement />
                    <div className={s.contactsGroup}>
                        <div className={s.contactsGroupItem}>Краснознаменск, улица Гагарина, 10</div>
                        <div className={s.contactsGroupItem}>
                            {" "}
                            <a href="tel:89959193051">+7 (995) 919 30 51</a>
                        </div>
                        <div className={s.contactsGroupItem}>инстаграм</div>
                        <div className={s.contactsGroupItem}>
                            Email:
                            <a href="mailto: wbk2gether@gmail.com"> wbk2gether@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
