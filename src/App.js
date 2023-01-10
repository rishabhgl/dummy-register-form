import { useState } from 'react';
import UserForm from './components/UserForm';
import Card from './UI/Card';
import UserList from './components/UserList';
import styles from './App.module.css';

function App() {

  const initialUsers = [
    {name: 'Rishabh', age: 19, id: Math.random().toString()},
    {name: 'Pranjay', age: 19,id: Math.random().toString()},
    {name: 'Varun', age: 19,id: Math.random().toString()}
  ]

  const [users,setUsers] = useState(initialUsers);

  const userAddedHandler = user => {
    setUsers(prevUsers => [...prevUsers,user]);
  }

  return (
    <div className= {styles.App}>
      <Card>
        <UserForm onUserAdded = {userAddedHandler}/>
      </Card>
      <Card>
        <UserList users = {users} />
      </Card>
    </div>
  );
}

export default App;
