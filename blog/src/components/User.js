import React from "react";
import { connect } from "react-redux";

function User({ user }) {
  if (!user) {
    return <p>loading..</p>;
  }

  return <p className="text-gray-600 text-3xl font-bold">{user.name}</p>;
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.iD),
  };
};

export default connect(mapStateToProps)(User);
