/**
 * Node modules
 */
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Fetching funcions
 */
import { fetchDetails } from '../features/details/detailsSlice';

/**
 * Components
 */
import Loader from '../components/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { item ,status, error } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchDetails({ type: 'movie', id }));
  }, [dispatch, id]);

  if (status === 'loading') return <Loader />;
  if (error) return <p>{error}</p>;

  return <div>{item?.title}</div>;
};

export default MovieDetails;
