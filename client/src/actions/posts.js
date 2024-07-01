import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data }); // Note: Corrected 'playload' to 'payload'
  } catch (error) {
    console.error(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const  {data} = await api.createPost(post);

    dispatch({ type: 'CREATE', playload: data});
  } catch (error) {
    console.log(error);
  }
}