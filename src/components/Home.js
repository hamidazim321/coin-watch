import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../redux/Coins/coins';
import Coin from './Coin';

const Home = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.coins);
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  // let content;
  // if (!pending && !error && coins.length > 0) {
  //   content = (
  //     <div>
  //       {coins.map((coin) => <Coin key={coin.nameid} props={coin} />)}
  //     </div>
  //   );
  // }

  if (coins.length > 0) {
    return (
      <div>
        {coins.map((coin) => <Coin key={coin.nameid} props={coin} />)}
      </div>
    );
  }

  return <p>Loading</p>;
};

export default Home;
