import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/postActions';

const Posts = () => {

  const [state, setState] = useState({ posts: [] })
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items)
  const newPost = useSelector(state => state.posts.item)


  useEffect(() => {
    if (newPost) {
      posts.unshift(newPost)
    }
    console.log('FETCH')
    dispatch(fetchPosts())
  }, [])

  console.log('STATE', state)

  const postItems = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))

  console.log(postItems)

  return (
    <div>
      {postItems}
    </div>
  )
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

export default Posts
