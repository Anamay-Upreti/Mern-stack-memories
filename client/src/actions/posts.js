import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data }); // Note: Corrected 'playload' to 'payload'
  } catch (error) {
    console.error(error.message);
  }
};
