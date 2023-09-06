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
    if (coins.length < 1) {
      dispatch(fetchCoins());
    }
  }, [dispatch]);

  const handleSearch = () => (
    coins.filter((coin) => coin.symbol.toLowerCase().startsWith(search)
    || coin.name.toLowerCase().startsWith(search))
  );

  let content;

  if (coins.length > 1) {
    content = (
      <div className={Styles.Home}>
        <div className={Styles.coins}>
          {handleSearch().map((coin) => <Coin key={coin.nameid} props={coin} />)}
        </div>
      </div>
    );
  } else if (pending) {
    content = (
      <div>
        <span>Loading</span>
      </div>
    );
  } else if (error) {
    content = (
      <div>
        <p>Error Fetching Coins</p>
      </div>
    );
  }
  if (handleSearch().length < 1 && coins.length > 1) {
    content = (
      <div>
        <p className={Styles.notFound}>Search Result Not Found</p>
      </div>
    );
  }

  return (
    <div className={Styles.Home}>
      <input
        className={Styles.search}
        type="text"
        onChange={(e) => { setSearch(e.target.value.toLowerCase().trim()); }}
        placeholder="Search Coin"
      />
      {content}
    </div>
  );
};

export default Home;
