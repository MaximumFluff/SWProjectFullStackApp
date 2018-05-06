// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { getIdea, getAllComments, ideaUpdate, ideaDelete } from "../actions/actions";
// import ShowAllComments from './comment_index';
//
// const Style = {
//   container: {
//     textAlign: 'left',
//     padding: '20px 100px',
//   },
//   heading: {
//     margin: '0px 0px 30px 0px',
//   },
//   button: {
//     margin: 'auto'
//   }
// };
//
// class IdeaShow extends Component {
//   constructor(props){
//     super(props);
//     this.state = {}
//   }
//
//   componentDidMount() {
//     const { id } = this.props.match.params;
//     this.props.fetchIdea(id);
//     this.props.fetchAllComments(id);
//   }
//
//   onDeleteClick = () => {
//     console.log(this.props.chosenIdea.id);
//     this.props.deleteIdea(this.props.chosenIdea.id);
//     //window.location = "/";
//   }
//
//   render() {
//     const { chosenIdea, commentList } = this.props;
//
//     if (!chosenIdea) {
//       return <div>Loading...</div>;
//     }
//
//     return (
//       <div className="container">
//         <h3 style={Style.heading} >IDEA {chosenIdea.id}</h3>
//
//         <div style={Style.container}>
//           <p><strong>Title:</strong> {chosenIdea.title}</p>
//           <p><strong>Description:</strong> {chosenIdea.description}</p>
//           <p><strong>Budget:</strong> € {chosenIdea.budget}</p>
//           <p><strong>Ready for comment?</strong> {!chosenIdea.isReadyForComments ? 'Yes' : 'No'}</p>
//           <p><strong>People needed:</strong> {chosenIdea.peopleNeeded}</p>
//           <p><strong>Created:</strong> {chosenIdea.creationDate.substring(0,10)}</p>
//           <p><strong>Last modified:</strong> {chosenIdea.lastModified.substring(0,10)} at {chosenIdea.lastModified.substring(11,19)}</p>
//           <p><strong>Category id:</strong> {chosenIdea.categoryId}</p>
//         </div>
//
//         <Link to="/"><button className="button button-primary button-text">Back To Home Page</button></Link>
//         <Link to="/edit"><button className="button button-edit button-text">Edit Idea</button></Link>
//         <button className="button button-delete button-text" onClick={this.onDeleteClick}>Delete Idea</button>
//
//         <h3 style={Style.heading} >Comments</h3>
//
//         <div style={Style.container}>
//           <ShowAllComments commentList={commentList}/>
//         </div>
//
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     chosenIdea: state.idea.chosenIdea,
//     commentList: state.comment.commentList
//   };
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getIdea: (id) => getIdea(id, dispatch),
//     getAllComments: (id) => getAllComments(id, dispatch),
//     ideaUpdate: (id, editIdea) => ideaUpdate(id, editIdea, dispatch),
//     ideaDelete: (id) => ideaDelete(id, dispatch)
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(IdeaShow);
