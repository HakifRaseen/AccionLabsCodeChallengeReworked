import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";

import "./styles.css";
import "react-table/react-table.css";

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({ tableData: data, loading: false });
      });
  }

  render() {
    const columns = [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "User ID",
        accessor: "userId"
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Body",
        accessor: "body"
      }
    ];
    return (
      <div className="App">
        <h1>Accion Labs Code Challenge</h1>
        <h2>Table with Sort and Pagination</h2>
        <ReactTable
          data={this.state.tableData}
          loading={this.state.loading}
          columns={columns}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
