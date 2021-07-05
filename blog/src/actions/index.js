import instance from "../service/api";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  // bad approach, breaking rules of redux , becoz of async-await syntax
  //const res = await api.get("/posts");
  // so we can use redux-thunk

  //promise-

  // const promise = api.get("/posts");

  // return {
  //   type: "FETCH_POSTS",
  //   payload: promise,
  // };

  // return async function (dispatch) {
  const res = await instance.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: res.data });
  // };
};

// export const fetchUsers = (iD) => async (dispatch) => {
//   const res = await instance.get(`/users/${iD}`);
//   dispatch({ type: "FETCH_USERS", payload: res.data });
// };

export const fetchUsers = (iD) => async (dispatch) => {
  const res = await instance.get(`/users/${iD}`);
  dispatch({ type: "FETCH_USERS", payload: res.data });
};

export const fetchUsersandPosts = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((iD) => dispatch(fetchUsers(iD)));

  //OR

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((iD) => dispatch(fetchUsers(iD)))
    .value();
};

// const _fetchUsers = _.memoize(async (iD, dispatch) => {
//   const res = await instance.get(`/users/${iD}`);
//   dispatch({ type: "FETCH_USERS", payload: res.data });
// });

// export const fetchUsers = (iD) => (dispatch) => {
//   _fetchUsers(iD, dispatch);
// };

// but here if u want
//to refetch a user incase his data has chnaged in the api u wont be able to do that
// so need to make another action creator for that
// same code but  without memoization
