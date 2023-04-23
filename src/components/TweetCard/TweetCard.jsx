import { useDispatch } from "react-redux";
import { followUser } from "../../redux/tweets/operations";
import css from "./TweetCard.module.css";
export const TweetCard = ({
  id,
  user,
  avatar,
  tweets,
  followers,
  isFollowing,
}) => {
  const dispatch = useDispatch();

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
      <img className={css.image} src={avatar} alt={user} />

      <div className={css.info}>
        <p className={css.stats}>{tweets.toLocaleString("en-US")} Tweets</p>
        <p className={css.stats}>
          {followers.toLocaleString("en-US")} Followers
        </p>
      </div>

      <button
        className={isFollowing ? css.active : css.btn}
        type="button"
        onClick={handleFollow}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};
