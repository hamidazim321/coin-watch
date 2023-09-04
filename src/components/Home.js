import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../redux/Coins/coins';

const Home = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div>
      {JSON.stringify(coins)}
    </div>
  );
};

export default Home;
