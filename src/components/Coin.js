import PropTypes from 'prop-types';
import Styles from '../styles/Coin.module.css';

const Coin = ({ props }) => {
  const { symbol, rank } = props;
  return (
    <div className={Styles.coin}>
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
};

export default Coin;
