import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile ({username='username not found', tag='tag  not found', location='location  not found', avatar='avatar  not found', stats}){
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
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag : PropTypes.string.isRequired,
  location : PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired,
  stats : PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),}

