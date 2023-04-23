import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../redux/tweets/operations";
import { TweetsList } from "../components/TweetsList/TweetsList";
import { GoBackButton } from "../components/GoBackBtn/GoBackBtn";

const Tweets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <main>
      <GoBackButton to="/">Back to Home Page</GoBackButton>
      <TweetsList />
    </main>
  );
};

export default Tweets;
