import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions';
import axios from 'axios'

const PostForm = () => {
  const [state, setState] = useState({ title: '', body: '' })
  const dispatch = useDispatch();
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  async function onSubmit(e) {
    e.preventDefault();
    const post = {
      title: state.title,
      body: state.body
    }
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { body: post })
      console.log(response)
    }
    catch (err) {
      console.log(err)
    }
    dispatch(createPost(post));
  }


  return (
    <div>
      <h1>Add Posts</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title: </label><br />
          <input type="text" name="title" value={state.title} onChange={onChange} />
        </div>
        <br />
        <div>
          <label>Body: </label><br />
          <textarea name="body" value={state.body} onChange={onChange} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

PostForm.prototype = {
  createPost: PropTypes.func.isRequired
};


export default PostForm;