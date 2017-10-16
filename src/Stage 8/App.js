import React, { Component } from 'react';

import Employee from './models/Employee';

// components
import Header from './components/header/header';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor/EmployeeEditor';

class App extends Component {
  // constructor

  // selectEmployee

  // refresh

  render() {
    return (
      <div id="app">
        // render Header here
        <Header />
        <div className="main-container">
          // render EmployeeList here
          <EmployeeList employees = {this.state.employees} selectEmployee = {this.selectEmployee.bind(this)} />
          // render EmployeeEditor
          <EmployeeEditor selected = {this.state.selectedEmployee} refreshList = {this.refresh.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App;
