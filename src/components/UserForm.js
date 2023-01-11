import formStyles from './UserForm.module.css';
import { useState } from 'react';

const UserForm = (props) => {

    const [enteredName, setName] = useState('');
    const [enteredAge, setAge] = useState('');

    const submitHandler = event => {
        event.preventDefault();
        const userDetails = {
            name: enteredName,
            age: Number(enteredAge)
        }
        setName('');
        setAge('');
        props.onUserAdded(userDetails);
    }

    const nameChangeHandler = event => {
        setName(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    return (<div className={formStyles.userForm}>
        <form onSubmit={submitHandler}>
            <div className={formStyles.userInputs}>
                <div className={formStyles.field}>
                    <label>Name:</label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div className={formStyles.field}>
                    <label>Age:</label>
                    <input type="numeric" value={enteredAge} onChange={ageChangeHandler} />
                </div>
            </div>
            <div className={formStyles.action}>
                <button type="submit"> Add User</button>
            </div>
        </form>
    </div>);
}

export default UserForm;