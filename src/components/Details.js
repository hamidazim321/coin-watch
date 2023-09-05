import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { COIN_DETAILS_URL } from './API';

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const req = await fetch(`${COIN_DETAILS_URL}${id}`);
        const res = await req.json();
        setDetails(res);
      } catch {
        setDetails('ERROR');
      }
    };
    fetchDetails();
  }, []);
  return (
    <div>
      <NavLink to="/">Back</NavLink>
      <p>{JSON.stringify(details)}</p>
    </div>

  );
};

export default DetailsPage;
