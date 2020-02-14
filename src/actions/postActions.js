
import { FETCH_POSTS, NEW_POST } from './types'
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  async function func() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('ACTION', data);
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    }
    catch (err) {
      console.log(err)
    }
  }
  func()
}

export const createPost = postData => dispatch => {
  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify(postData)
  // })
  //   .then(res => res.json())
  //   .then(post =>
  dispatch({
    type: NEW_POST,
    payload: postData
  })
  //   );
};
