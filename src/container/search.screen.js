import React, { Component } from "react";
import { Input } from "antd";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Input placeholder="Search keyword..." />
      </div>
    );
  }
}

export default SearchScreen;
