import React, { Component } from "react";

import MainSearch from "../cmps/MainSearch.js";

export default class Header extends Component {
  render() {
    return (
      <div className="main-header ">
        <h1>Travel with a local guide worldwide</h1>
        <MainSearch onSearch={this.onSearch}></MainSearch>
      </div>
    );
  }
}
