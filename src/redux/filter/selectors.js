import { createSelector } from '@reduxjs/toolkit';

import { selectUsers } from '../tweets/selectors';

export const selectFilter = state => state.filter;

export const selectFilteredUsers = createSelector(
  [selectFilter, selectUsers],
  (filter, users) => {
    switch (filter) {
      case 'follow':
        return users.filter(user => !user.isFollowing);

      case 'following':
        return users.filter(user => user.isFollowing);

      default:
        return users;
    }
  }
);
