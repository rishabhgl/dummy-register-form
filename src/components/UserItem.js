import userItemStyles from './UserItem.module.css';

const UserItem = (props) => {
    return ( <div className = {userItemStyles['user-item']}>
        <div className = {userItemStyles.userName}>Name : {props.name}</div>
        <div className = {userItemStyles.userAge}>Age : {props.age}</div>
    </div> );
}
 
export default UserItem;