import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { COIN_DETAILS_URL } from './API';
import styles from '../styles/Details.module.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const req = await fetch(`${COIN_DETAILS_URL}${id}`);
        const res = await req.json();
        setDetails(res[0]);
      } catch {
        setDetails('ERROR');
      }
      setLoading(false);
    };
    fetchDetails();
  }, [id]);

  let content;

  if (loading) {
    content = (
      <div>
        Loading
      </div>
    );
  } else if (typeof details === 'object') {
    content = (
      <div className={styles.coin}>
        <div className={styles.listHeader}>
          <p className={styles.headline}>{details.symbol}</p>
          <span>
            Rank in Market Place:
            {details.rank}
          </span>
        </div>
        <ul className={styles.list}>
          <li>
            <p className={styles.category}>Name</p>
            <span className={styles.data}>{details.name}</span>
          </li>
          <li>
            <p className={styles.category}>Price</p>
            <span className={styles.data}>{`$ ${details.price_usd}`}</span>
          </li>
          <li>
            <p className={styles.category}>Market Cap</p>
            <span className={styles.data}>{`$ ${details.market_cap_usd}`}</span>
          </li>
          <li>
            <p className={styles.category}>Price Change weekly</p>
            <span className={styles.data}>
              {details.percent_change_7d}
              %
            </span>
          </li>
          <li>
            <p className={styles.category}>Price Change daily</p>
            <span className={styles.data}>
              {details.percent_change_24h}
              %
            </span>
          </li>
          <li>
            <p className={styles.category}>Price Change hourly</p>
            <span className={styles.data}>
              {details.percent_change_1h}
              %
            </span>
          </li>
        </ul>
      </div>
    );
  } else if (typeof details !== 'object') {
    content = (
      <div>
        Coin Not Found
      </div>
    );
  }
  return (
    <div className={styles.details}>
      <NavLink to="/">Back</NavLink>
      {content}
    </div>

  );
};

export default DetailsPage;
