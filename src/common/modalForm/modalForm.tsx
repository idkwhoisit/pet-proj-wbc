import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import s from "./modalForm.module.scss";

type TitleProps = {
    title: string;
};

export function ModalForm({ title }: TitleProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button
                variant="outline-dark"
                style={{
                    width: 800,
                    fontSize: 42,
                    fontWeight: 300,
                    letterSpacing: 8,
                    fontFamily: `Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif`,
                }}
                size={"lg"}
            >
                {title}
            </Button> */}

            <div
                className={s.vibrate}
                style={{
                    fontSize: 80,
                    fontWeight: "bold",
                    textTransform: "uppercase",

                    fontFamily: `Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif`,
                }}
                onClick={handleShow}
            >
                Оставить заявку
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
