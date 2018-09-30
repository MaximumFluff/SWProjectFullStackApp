import React, { Component } from "react";
import NewIdeaForm from "./NewIdeaForm";
import { connect } from "react-redux";
import { ideaCreate } from "../actions/actions";

class IdeaNew extends Component {
  render() {
    return (
      <div>
        <NewIdeaForm onSubmit={this.props.ideaCreate} />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    ideaCreate: newIdea => ideaCreate(newIdea, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaNew);
