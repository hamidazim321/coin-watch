import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiPhoneCall } from 'react-icons/fi';
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
  }, [dispatch, coins.length]);

  const handleSearch = () => (
    coins.filter((coin) => coin.symbol.toLowerCase().startsWith(search)
    || coin.name.toLowerCase().startsWith(search))
  );

  let content;

  if (coins.length > 1) {
    content = (
      <div className={Styles.coins}>
        <div className={Styles.col1}>
          {handleSearch().map((coin, index) => {
            if (index % 2 === 0) {
              return <Coin key={coin.nameid} props={coin} />;
            }
            return null;
          })}
        </div>
        <div className={Styles.col2}>
          {handleSearch().map((coin, index) => {
            if (index % 2 !== 0) {
              return <Coin key={coin.nameid} props={coin} />;
            }
            return null;
          })}
        </div>
      </div>
    );
  } else if (pending) {
    content = (
      <div className={Styles.loading}>
        <FiPhoneCall className={Styles.callIcon} />
        <p>Calling Coins...</p>
      </div>
    );
  } else if (error) {
    content = (
      <div className={Styles.notFound}>
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
