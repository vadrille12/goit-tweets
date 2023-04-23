import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://643ab1f9bd3623f1b9b956ab.mockapi.io/";

export const fetchUsers = createAsyncThunk(
  "tweets/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/users");
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  "tweets/followUser",
  async ({ id, followers, isFollowing }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${id}`, {
        followers,
        isFollowing,
      });

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
