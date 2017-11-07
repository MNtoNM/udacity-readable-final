import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/actions_posts';

class PostDetail extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) {
      console.log("fetchPost happy path");
      this.props.fetchPost(id)
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost: fetchPost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
