import React, { Component } from "react";
import NewCommentForm from "./NewCommentForm";
import { connect } from "react-redux";
import { commentCreate } from "../actions/actions";

class CommentNew extends Component {
  render() {
    return (
      <div>
        <NewCommentForm onSubmit={this.props.commentCreate} />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    commentCreate: newComment => commentCreate(newComment, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentNew);
