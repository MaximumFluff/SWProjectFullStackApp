import axios from "axios";

export const GET_ALL_IDEAS = "get_all_ideas";
export const GET_ALL_COMMENTS = "get_all_comments";
export const IDEA_CREATE = "idea_create";
export const IDEA_DELETE = "idea_delete";
export const COMMENT_DELETE = "comment_delete";
export const COMMENT_CREATE = "idea_create";

const ROOT_URL = "https://idea-database.herokuapp.com/api";

function receiveData(request, json) {
  return { type: request, payload: json };
}

export function getAllIdeas(dispatch) {
  return axios
    .get(`${ROOT_URL}/idea`)
    .then(response => dispatch(receiveData(GET_ALL_IDEAS, response.data)));
}

export function getAllComments(dispatch) {
  return axios
    .get(`${ROOT_URL}/comment`)
    .then(response => dispatch(receiveData(GET_ALL_COMMENTS, response.data)));
}

export function ideaCreate(newIdea) {
  return axios
    .post(`${ROOT_URL}/idea/`, newIdea)
    .then(() => {
      console.log("success!");
      window.location = "/";
    })
    .catch(err => {
      console.error(err);
    });
}

export function ideaDelete(id, dispatch) {
  return axios
    .delete(`${ROOT_URL}/idea/delete/${id}`)
    .then(response => dispatch(receiveData(IDEA_DELETE, response.data)))
    .catch(err => {
      console.error(err);
    });
}

export function commentDelete(id, dispatch) {
  return axios
    .delete(`${ROOT_URL}/comment/delete/${id}`)
    .then(response => dispatch(receiveData(IDEA_DELETE, response.data)))
    .catch(err => {
      console.error(err);
    });
}

export function commentCreate(newComment) {
  return axios
    .post(`${ROOT_URL}/comment/`, newComment)
    .then(() => {
      console.log("success!");
      window.location = "/comment";
    })
    .catch(err => {
      console.error(err);
    });
}