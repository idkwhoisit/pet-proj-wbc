import s from "./Header.module.scss";

import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import tMeLogo from "../../icons/telegramIc.svg";
import whattsLogo from "../../icons/whatsappIc.svg";

export const Header = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        document.addEventListener("scroll", scrollHendler);

        return function () {
            document.removeEventListener("scroll", scrollHendler);
        };
    }, []);
    const scrollHendler = (e: any) => {
        if (e.target.documentElement.scrollTop < window.innerHeight / 2) {
            setActiveSection("home");
        }
        if (e.target.documentElement.scrollTop > window.innerHeight / 2 && e.target.documentElement.scrollTop < window.innerHeight * 1.5) {
            setActiveSection("aboutSection");
        }
        if (
            e.target.documentElement.scrollTop > window.innerHeight * 1.5 &&
            e.target.documentElement.scrollTop < window.innerHeight * 2.5
        ) {
            setActiveSection("price");
        }
        if (
            e.target.documentElement.scrollTop > window.innerHeight * 2.5 &&
            e.target.documentElement.scrollTop < window.innerHeight * 3.5
        ) {
            setActiveSection("emailForm");
        }
        if (e.target.documentElement.scrollTop > window.innerHeight * 3.5) {
            setActiveSection("contacts");
        }
        // console.log("height", e.target.documentElement.scrollHeight);
        // console.log(" top height", e.target.documentElement.scrollTop);
        // console.log("window height", window.innerHeight);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.menu}>
                <Link
                    onClick={() => setActiveSection("home")}
                    to={"home"}
                    delay={0}
                    offset={-264}
                    smooth={true}
                    duration={450}
                    className={activeSection === "home" ? `${s.menuItem} ${s.active}` : s.menuItem}
                >
                    West Bike Customs
                </Link>
                <Link
                    onClick={() => setActiveSection("aboutSection")}
                    to={"aboutSection"}
                    delay={0}
                    offset={-10}
                    smooth={true}
                    duration={450}
                    className={activeSection === "aboutSection" ? `${s.menuItem} ${s.active}` : s.menuItem}
                >
                    О нас
                </Link>
                <Link
                    onClick={() => setActiveSection("price")}
                    to={"price"}
                    delay={0}
                    offset={-20}
                    smooth={true}
                    duration={450}
                    className={activeSection === "price" ? `${s.menuItem} ${s.active}` : s.menuItem}
                >
                    Прайс
                </Link>
                <Link
                    onClick={() => setActiveSection("emailForm")}
                    to={"emailForm"}
                    delay={0}
                    offset={0}
                    smooth={true}
                    duration={450}
                    className={activeSection === "emailForm" ? `${s.menuItem} ${s.active}` : s.menuItem}
                >
                    Оставить заявку
                </Link>
                <Link
                    onClick={() => setActiveSection("contacts")}
                    to={"contacts"}
                    delay={0}
                    offset={0}
                    smooth={true}
                    duration={450}
                    className={activeSection === "contacts" ? `${s.menuItem} ${s.active}` : s.menuItem}
                >
                    Контакты
                </Link>
            </div>
            <div className={s.messangers}>
                <ul className={s.contactsList}>
                    <li className={`${s.item} ${s.heartbeat}`}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://telegram.im/@westbike_customs
"
                        >
                            <img src={tMeLogo} alt="" />
                        </a>
                    </li>

                    <li className={`${s.item} ${s.heartbeat}`}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://wa.me/79959193051
"
                        >
                            <img src={whattsLogo} alt="" />
                        </a>
                    </li>
                    <li className={`${s.item} ${s.phone}`}>
                        <a href="tel:89959193051">+7 (995) 919 30 51</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
