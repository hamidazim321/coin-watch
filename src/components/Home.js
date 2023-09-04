import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../redux/Coins/coins';
import Coin from './Coin';
import Styles from '../styles/Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const { coins, pending, error } = useSelector((state) => state.coins);
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleSearch = () => (
    coins.filter((coin) => coin.symbol.toLowerCase().startsWith(search)
    || coin.name.toLowerCase().startsWith(search))
  );

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
    <div className={Styles.Home}>
      <input
        className={Styles.search}
        type="text"
        onChange={(e) => { setSearch(e.target.value.toLowerCase()); }}
        placeholder="Search Coin"
      />
      <div className={Styles.coins}>
        {handleSearch().map((coin) => <Coin key={coin.nameid} props={coin} />)}
      </div>
    </div>
  );
};

export default Home;
