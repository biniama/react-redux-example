import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  // runs when it receives a new prop from the state
  // we use it to add the newly added post to the beginning of the posts. (`.push` adds it to the end)
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      //unshift adds item to the beginning of the array
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

//add props to PropTypes
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  // state.posts refers to rootReducers => export default combineReducers({posts: postReducer})
  //.items refers to actions => case FETCH_POSTS:return {...state,items: action.payload}
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);