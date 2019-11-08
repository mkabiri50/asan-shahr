import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationItem from "./NavBarItem/NavBarItem";

class navigationItems extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          {this.props.isAuth ? (
            <p>به آسان شهر خوش آمدید</p>
          ) : (
            <p> لطفا ابتدا ثبت نام کنید</p>
          )}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};
export default connect(mapStateToProps)(navigationItems);
