import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import NewTable from "./components/table/NewTable/NewTable";
import TableWrapper from "./components/table/TableWrapper";
import TableList from "./components/TableList/TableList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/new">
            <NewTable />
          </Route>
          <Route path="/table/:tableName" children={<TableWrapper />} />
          <Route path="/">
            <NewTable />
            <TableList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
