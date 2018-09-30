import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { getAllIdeas, ideaDelete } from "../actions/actions";

class IdeaIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllIdeas();
  }

  listIdeas = () => {
    console.log(this.props.ideaList);
    let ideaList = this.props.ideaList;
    if (ideaList === undefined) {
      return "";
    } else {
      return (
        <ReactTable
          data={ideaList}
          columns={[
            {
              Header: "ID",
              accessor: "id",
              filterable: true
            },
            {
              Header: "Title",
              accessor: "title",
              filterable: true
            },
            {
              Header: "Description",
              accessor: "description",
              filterable: true
            },
            {
              Header: "Budget",
              accessor: "budget",
              filterable: true
            },
            {
              Header: "People Needed",
              accessor: "peopleNeeded",
              filterable: true
            },
            {
              Header: "Creation Date",
              accessor: "creationDate",
              filterable: true
            },
            {
              Header: "Last Modified",
              accessor: "lastModified",
              filterable: true
            },
            {
              Header: "Category ID",
              accessor: "categoryId",
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
                      .ideaDelete(value)
                      .then(() => this.props.getAllIdeas());
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
    let ideaTable;

    if (this.props.ideaList === undefined) {
      ideaTable = <div>Loading...</div>;
    } else {
      ideaTable = this.listIdeas();
    }
    return <div className="container">{ideaTable}</div>;
  }
}

IdeaIndex.propTypes = {
  ideaList: PropTypes.array
};

const mapStateToProps = state => {
  return {
    ideaList: state.idea.ideaList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllIdeas: () => getAllIdeas(dispatch),
    ideaDelete: id => ideaDelete(id, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaIndex);
