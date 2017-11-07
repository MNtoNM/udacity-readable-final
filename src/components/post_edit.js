import React, { Component } from 'react';

class PostEdit extends Component {
  render() {
    return (
      <div>
        Edit an existing post
        {this.props.id}
      </div>
    )
  }
}

export default PostEdit;
