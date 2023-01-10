import cardStyles from './Card.module.css';

const Card = (props) => {
    return ( <div className = {cardStyles.card}>
        {props.children}
    </div>);
}
 
export default Card;