import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/tweets/operations';
import { TweetsList } from '../components/TweetsList/TweetsList';
import { GoBackButton } from '../components/GoBackBtn/GoBackBtn';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { ToTopBtn } from 'components/ToTopBtn/ToTopBtn';

const Tweets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <main>
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
