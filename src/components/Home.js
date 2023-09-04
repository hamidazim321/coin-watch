import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../redux/Coins/coins';
import Coin from './Coin';

const Home = () => {
  const dispatch = useDispatch();
  const { coins, pending, error } = useSelector((state) => state.coins);
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (pending) {
    return (
      <div>
        <span>Loading</span>
      </div>
    );
  }

  if (error) {
    <div>
      <p>Error Fetching Coins</p>
    </div>;
  }

  return (
    <div>
      {coins.map((coin) => <Coin key={coin.nameid} props={coin} />)}
    </div>
  );
};

export default Home;
