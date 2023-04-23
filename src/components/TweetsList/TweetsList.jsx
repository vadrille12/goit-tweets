import { useState } from "react";
import { useSelector } from "react-redux";

import { FiDownload } from "react-icons/fi";

import { selectUsers } from "../../redux/tweets/selectors";
import { TweetCard } from "../TweetCard/TweetCard";
import css from "./TweetsList.module.css";

const ITEMS_PER_PAGE = 6;

export const TweetsList = () => {
  const tweets = useSelector(selectUsers);
  const [page, setPage] = useState(1);

  const tweetsPerPage = tweets.slice(0, page * ITEMS_PER_PAGE);
  const isButtonHidden = page * ITEMS_PER_PAGE >= tweets.length;

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };
  return (
    <>
      <ul className={css.list}>
        {tweetsPerPage.map(({ id, ...restProps }) => (
          <li className={css.item} key={id}>
            <TweetCard id={id} {...restProps} />
          </li>
        ))}
      </ul>
      {isButtonHidden ? null : (
        <button className={css.btn} type="button" onClick={handleLoadMore}>
          Load More
          <FiDownload />
        </button>
      )}
    </>
  );
};
