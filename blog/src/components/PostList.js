import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsersandPosts } from "../actions";
import User from "./User";

function PostList({ postss, fetchUsersandPosts }) {
  useEffect(() => {
    fetchUsersandPosts();
  }, []);

  const _renderPosts = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        {postss.map((post) => (
          <div
            key={post.id}
            className="border-4 border-gray-800 my-2 rounded-xl p-10 shadow-xl w-3/6"
          >
            <User iD={post.userId} />
            <b>{post.title}</b>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  };

  return <div className="px-20">{_renderPosts()}</div>;
}

const mapStateToProps = (state) => {
  return {
    postss: state.posts,
    fetchUsersandPosts: state.fetchUsersandPosts,
  };
};

export default connect(mapStateToProps, { fetchUsersandPosts })(PostList);
