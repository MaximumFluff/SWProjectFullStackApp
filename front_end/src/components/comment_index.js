import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {getAllComments, commentDelete} from "../actions/actions";

class CommentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllComments();
  }

  listComments = () => {
    console.log(this.props.commentList);
    let commentList = this.props.commentList;
    if (commentList === undefined) {
      return "";
    } else {
      return (
        <ReactTable
          data={commentList}
          columns={[
            {
              Header: "Member ID",
              accessor: "memberId",
              filterable: true
            },
            {
              Header: "Idea ID",
              accessor: "ideaId",
              filterable: true
            },
            {
              Header: "Comment Time",
              accessor: "commentTimeStamp",
              filterable: true
            },
            {
              Header: "Comment",
              accessor: "commentLine",
              filterable: true
            },
            {
              Header: "Delete",
              accessor: "id",
              filterable: false,
              sortable: false,
              Cell: ({ value }) => (
                <button
                  onClick={() => {
                    this.props
                      .commentDelete(value)
                      .then(() => this.props.getAllComments());
                  }}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              )
            }
          ]}
          minRows={1}
          className="-striped -highlight"
        />
      );
    }
  };

  render() {
    let commentTable;

    if (this.props.commentList === undefined) {
      commentTable = <div>Loading...</div>;
    } else {
      commentTable = this.listComments();
    }
    return <div className="container">{commentTable}</div>;
  }
}

CommentIndex.propTypes = {
  commentList: PropTypes.array
};

const mapStateToProps = state => {
  return { commentList: state.comment.commentList };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllComments: () => getAllComments(dispatch),
    commentDelete: id => commentDelete(id, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
