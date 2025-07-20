import { ModalForm } from "../../common/modalForm/modalForm";
import s from "./EmailForm.module.scss";

export const EmailForm = () => {
    return (
        <div className={s.bgWrapper}>
            <div id={"emailForm"} className={s.wrapper}>
                <div className={s.formBtn}>
                    <ModalForm title={"Оставить заявку"} />
                </div>
            </div>
        </div>
    );
};
