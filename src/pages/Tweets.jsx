import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoading } from 'redux/tweets/selectors';
import { fetchUsers } from 'redux/tweets/operations';

import { TweetsList } from 'components/TweetsList/TweetsList';
import { GoBackButton } from 'components/GoBackBtn/GoBackBtn';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { ToTopBtn } from 'components/ToTopBtn/ToTopBtn';
import Loader from 'components/Loader/Loader';

const Tweets = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <main>
      {isLoading && <Loader />}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <GoBackButton to="/">Back to Home Page</GoBackButton>
        <Dropdown />
      </div>

      <TweetsList />
      <ToTopBtn />
    </main>
  );
};

export default Tweets;
