import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoading } from 'redux/tweets/selectors';
import { followUser } from 'redux/tweets/operations';

import css from './TweetCard.module.css';
export const TweetCard = ({
  id,
  user,
  avatar,
  tweets,
  followers,
  isFollowing,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleFollow = () => {
    dispatch(
      followUser(
        isFollowing
          ? { id, followers: followers - 1, isFollowing: false }
          : { id, followers: followers + 1, isFollowing: true }
      )
    );
  };

  return (
    <div className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img className={css.image} src={avatar} alt={user} />
      </div>

      <div className={css.info}>
        <p className={css.stats}>{tweets.toLocaleString('en-US')} Tweets</p>
        <p className={css.stats}>
          {followers.toLocaleString('en-US')} Followers
        </p>
      </div>

      <button
        className={isFollowing ? css.active : css.btn}
        type="button"
        onClick={handleFollow}
        disabled={isLoading}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};
