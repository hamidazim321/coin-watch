import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { COIN_DETAILS_URL } from './API';

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
      <div>
        <p>{details.symbol}</p>
        <ul>
          <li>
            {`Name: ${details.name}`}
          </li>
          <li>
            {`Rank in Marketplace: ${details.rank}`}
          </li>
          <li>
            {`Price(USD): ${details.price_usd}`}
          </li>
          <li>
            {`Market Cap(USD): ${details.market_cap_usd}`}
          </li>
          <li>
            {`Price Change weekly: ${details.percent_change_7d}%`}
          </li>
          <li>
            {`Price Change daily: ${details.percent_change_24h}%`}
          </li>
          <li>
            {`Price Change hourly: ${details.percent_change_1h}%`}
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
    <div>
      <NavLink to="/">Back</NavLink>
      {content}
    </div>

  );
};

export default DetailsPage;
