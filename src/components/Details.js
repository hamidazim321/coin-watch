import { NavLink, useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <NavLink to="/">Back</NavLink>
      <p>{`Details ${id}`}</p>
    </div>

  );
};

export default DetailsPage;
