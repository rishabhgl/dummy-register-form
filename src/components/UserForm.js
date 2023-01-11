import formStyles from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {

    const [enteredName, setName] = useState('');
    const [enteredAge, setAge] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [error,setError] = useState();

    const submitHandler = event => {
        event.preventDefault();

        if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {

            setIsValid(false);
            setError({
                title: 'Invalid Input',
                message: 'Empty User --Invalid Input!!'
            })
            return;
        }

        if (+enteredAge <= 0) {

            setAge('');
            setIsValid(false);
            setError({
                title: 'Invalid Input',
                message: 'Invalid Input!! Age must be greater than 0'
            })
            return;
        }
        const userDetails = {
            name: enteredName,
            age: +enteredAge,
            id: Math.random().toString()
        }
        setName('');
        setAge('');
        props.onUserAdded(userDetails);
    }

    const nameChangeHandler = event => {
        if (!isValid && event.target.value != '') { setIsValid(true) };
        setName(event.target.value);
    }

    const ageChangeHandler = event => {
        if (!isValid && event.target.value != '') { setIsValid(true) };
        setAge(event.target.value);
    }

    const confirmHandler = () =>
    {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {confirmHandler}/>}
            <Card className={formStyles.userForm}>
                <form onSubmit={submitHandler}>
                    <div className={formStyles.userInputs}>
                        <div className={`${formStyles.field} ${!isValid ? formStyles.invalid : ''}`}>
                            <label htmlFor='name'>Name:</label>
                            <input type="text" value={enteredName} onChange={nameChangeHandler} />
                        </div>
                        <div className={`${formStyles.field} ${!isValid ? formStyles.invalid : ''}`}>
                            <label htmlFor='age'>Age:</label>
                            <input type="numeric" value={enteredAge} onChange={ageChangeHandler} />
                        </div>
                    </div>
                    <div className={formStyles.action}>
                        <Button type="submit"> Add User</Button>
                    </div>
                </form>
            </Card>
        </>);
}

export default UserForm;