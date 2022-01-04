import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem ({avatar, name, isOnline})
{
    return (        
        <li className={styles.cardsItem}>        
        <span className={isOnline ? styles.statusIsOnline : styles.status} ></span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar : PropTypes.string,
    name :PropTypes.string,
    isOnline: PropTypes.bool,
}