import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type PropsType = {
    header: string;
    desctipton: string;
    list: string[];
};

export default function ModalDescription(props: PropsType) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ color: "black" }}>
            <Button variant="dark" onClick={handleShow}>
                Подробнее
            </Button>

            <Modal size="lg" show={show} centered={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.desctipton}
                    <div style={{ fontWeight: "bold", margin: "10px 0" }}>{props.header} включает в себя:</div>
                    <ul>
                        {props.list.map((el) => (
                            <li>{el}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </div>
    );
}
