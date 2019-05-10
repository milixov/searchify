import React, { Component } from "react";
import { Input, Table } from "antd";

import { observable } from "mobx";
import { observer, inject } from "mobx-react";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
  }
];

@inject("stores")
@observer
class SearchScreen extends Component {
  @observable store = this.props.stores.search;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { search } = this.store;
    return (
      <div>
        <Input placeholder="Search keyword..." />
        <Table
          loading={search.loading}
          dataSource={search.data}
          columns={columns}
        />
      </div>
    );
  }
}

export default SearchScreen;
