import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Styles from '../styles/Coin.module.css';

const Coin = ({ props }) => {
  const {
    symbol, rank, id,
  } = props;
  return (
    <div className={Styles.coin}>
      <NavLink className={Styles.arrow} to={`/Details/${id}`}><FaArrowRight /></NavLink>
      <p className={Styles.name}>{symbol}</p>
      <p className={Styles.rank}>{`Ranking: ${rank}`}</p>
    </div>
  );
};

Coin.propTypes = {
  props: PropTypes.shape({
    symbol: PropTypes.string,
  }).isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Coin;
