import userListStyles from './UserList.module.css';
import UserItem from './UserItem';

const UserList = (props) => {
    return ( <div className = {userListStyles['user-list']}>
        {
            props.users.map(user => <UserItem name = {user.name} age = {user.age} key = {user.id}/>)
        }
    </div> );
}
 
export default UserList;