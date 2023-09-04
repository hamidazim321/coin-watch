import PropTypes from 'prop-types';

const Coin = ({ props }) => {
  const { symbol, rank } = props;
  return (
    <div className="coin-card">
      <p className="coin-symbol">{symbol}</p>
      <p className="coin-rank">{rank}</p>
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
