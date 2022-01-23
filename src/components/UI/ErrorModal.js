import React from "react";
// import ReactDOM from "react-dom";
// or use just createPortal
import { createPortal } from "react-dom";

import Button from "./Button";
import Card from "./Card";

import styles from './ErrorModal.module.css'

// working with Portals
const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}/>;
}

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
}

const ErrorModal = (props) => {
    return (
        <>
            {/* {ReactDOM.createPortal( */}
            {createPortal(
                <Backdrop onConfirm={props.onConfirm}/>, 
                document.getElementById('backdrop-root')
            )}
            {/* {ReactDOM.createPortal( */}
            {createPortal(
                <ModalOverlay 
                    onConfirm={props.onConfirm}
                    title={props.title}
                    message={props.message}
                />, 
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export default ErrorModal