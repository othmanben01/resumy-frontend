import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
import { logout } from "../redux/iam/actions";
// Routing
import { useNavigate } from "react-router-dom";

const SignOut = ({ logout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => logout(navigate))();
  }, []);

  return <div>Logout</div>;
};

// Redux config
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
