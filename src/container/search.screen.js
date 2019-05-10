import React, { Component } from "react";
import { Input, Table } from "antd";

import { observable } from "mobx";
import { observer, inject } from "mobx-react";

const Search = Input.Search;

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author"
  }
];

@inject("stores")
@observer
class SearchScreen extends Component {
  @observable store = this.props.stores.search;

  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  handleChange = prop => event => {
    const value = event.target.value;
    this.setState({ [prop]: value });
    this.store.searchData(value);
  };

  render() {
    const { search } = this.store;
    const { query } = this.state;
    return (
      <div>
        <Search
          placeholder="Type a keyword..."
          value={query}
          onChange={this.handleChange("query")}
        />
        <Table
          rowKey={item => `ID_${item.id}`}
          className="mTable"
          loading={search.loading}
          dataSource={search.data}
          columns={columns}
        />
      </div>
    );
  }
}

export default SearchScreen;
