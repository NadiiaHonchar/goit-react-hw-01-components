import PropTypes from 'prop-types';
import styles from './TransactionHistiry.module.css'

export default function TransactionHistory ({items})
{
    return (
        <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {
          items.map(({id, type, amount, currency}) => (
            <tr key = {id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
          ) ) }    
  </tbody>
</table>
    )
}

TransactionHistory.propType = {    
    items:PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,      
  }))
}