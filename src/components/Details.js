import { NavLink } from 'react-router-dom';

const DetailsPage = () => {
  const n = 2;
  return (
    <div>
      <NavLink to="/">Back</NavLink>
      <p>{`Details ${n}`}</p>
    </div>

  );
};

export default DetailsPage;
