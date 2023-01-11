import errorStyles from './ErrorModal.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';

const Backdrop = (props) => {
    return <div className={errorStyles.backdrop} onClick={props.onConfirm} />
}

const ErrorPopUp = props => {
    return (
        <Card className={errorStyles.modal}>
            <header className={errorStyles.header}>
                <h2> {props.title}</h2>
            </header>
            <div className={errorStyles.content}>
                {props.message}
            </div>
            <footer className={errorStyles.action}>
                <Button onClick={props.onConfirm}>Confirm</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {

    return (<React.Fragment>
        {
            ReactDOM.createPortal(<Backdrop onConfirm = {props.onConfirm}/>, document.getElementById('backdrop-root'))
        }
        {
            ReactDOM.createPortal(<ErrorPopUp title = {props.title} message = {props.message} onConfirm = {props.onConfirm}/>, document.getElementById('popup-root'))
        }
    </React.Fragment>
    );
}

export default ErrorModal;