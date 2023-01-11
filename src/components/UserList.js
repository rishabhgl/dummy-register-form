import userListStyles from './UserList.module.css';
import Card from '../UI/Card';
import UserItem from './UserItem';

const UserList = (props) => {
    return ( <Card className={userListStyles['user-list']}>
        {
            props.users.map(user => <UserItem name = {user.name} age = {user.age} key = {user.id}/>)
        }
    </Card> );
}
 
export default UserList;