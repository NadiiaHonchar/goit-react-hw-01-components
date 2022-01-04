import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


export default function Statistics ({title, stats})
{
    return (
  <section className={styles.statistics}>
    {title && <h2 className="title">{title}</h2>}

  <ul className={styles.statList}>
    {
      stats.map(stat => (
        <li className={styles.item} key = {stat.id}>
        <span className="label">{stat.label}</span>
        <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
      ) ) }    
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats : PropTypes.array.isRequired,    
  }