export const GET_REPOS_SUCCESS = 'mob-vend/repos/LOAD_SUCCESS';

const initialState = {repos: []};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case GET_REPOS_SUCCESS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}

export const listRepos = (user) => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch(`https://api.github.com/users/${user}/repos`, {headers, })
      .then(res => res.json())
      .then(payload => {
        return dispatch({
          type: GET_REPOS_SUCCESS,
          payload
        })
      })
  }
}
