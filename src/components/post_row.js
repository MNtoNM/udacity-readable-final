import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { postVote } from '../actions/actions_posts';

class PostRow extends Component {
  render() {
    const { id, title, commentCount, voteScore } = this.props;
    return (
      <li key={id} className="list-group-item">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Link to={`/post/${id}`}>
                <strong>{title}</strong>
              </Link>
            </div>


            <div className="col-md-2">
              <i className="fa fa-comments" />&nbsp;&nbsp;
              <span className="comment-count">{ commentCount }</span>
            </div>

            <div className="col-md-2">
              <i
                className="fa fa-thumbs-up"
                onClick={() => {
                  this.props.postVote(id, { options: 'upVote' })
                }}
              /> &nbsp;&nbsp;
              <span className="vote-score">{ voteScore }</span>&nbsp;&nbsp;
              <i className="fa fa-thumbs-down" />
            </div>

            <div className="col-md-1">
              <Link to={`/post/${id}/edit`}>
                <i className="fa fa-edit" />
              </Link>
            </div>

            <div className="col-md-1">
              <i className="fa fa-trash" />
            </div>

          </div>
        </div>
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      postVote
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(PostRow);
