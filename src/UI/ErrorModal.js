import errorStyles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {

    return (<div className={errorStyles.backdrop} onClick = {props.onConfirm}>
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
    </div>
    );
}

export default ErrorModal;