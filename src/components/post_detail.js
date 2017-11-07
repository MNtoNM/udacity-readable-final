import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostDetail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) {
      console.log("fetchPost happy path", this);
    } else {
      console.log("post was not fetched.");
    }
  }

  render() {
    console.log("this.props.post from PostDetail: ", this.props.post);
    return (
      <div>
        test
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id],
    // comments
  }
}

export default connect(mapStateToProps)(PostDetail);
