import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile ({username='username not found', tag='tag  not found', location='location  not found', avatar='avatar  not found', followers='followers  not found', views='views  not found', likes='likes  not found'}){
  return (
  <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt={username}
      className={styles.avatar}
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
)
}

Profile.propTypes = {
  username: PropTypes.string,
  tag : PropTypes.string,
  location : PropTypes.string,
  avatar : PropTypes.string,
  followers : PropTypes.number,
  views : PropTypes.number,
  likes : PropTypes.number,
}
