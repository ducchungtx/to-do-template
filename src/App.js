import React, { Component } from 'react';
import './App.css';

var todoItems = [];
todoItems.push({ index: 1, value: "learn react", done: false });
todoItems.push({ index: 2, value: "Go shopping", done: true });
todoItems.push({ index: 3, value: "buy flowers", done: true });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: todoItems }
  }
  render() {
    return (
      <div id="main">
        <h1>Lịch làm việc</h1>
        <ul className="list-group">
          <li className="list-group-item ">
            <div className="undone">
              <span className="glyphicon glyphicon-ok icon" aria-hidden="true"></span>
              123
              <button type="button" className="close">&times;</button>
            </div>
           </li>
           <li className="list-group-item ">
            <div className="undone">
              <span className="glyphicon glyphicon-ok icon" aria-hidden="true"></span>
              123
              <button type="button" className="close">&times;</button>
            </div>
           </li>
           <li className="list-group-item ">
            <div className="undone">
              <span className="glyphicon glyphicon-ok icon" aria-hidden="true"></span>
              123
              <button type="button" className="close">&times;</button>
            </div>
           </li>
        </ul>
        <form ref="form" className="form-inline">
            <input type="text" ref="itemName" className="form-control" placeholder="thêm công việc..."/>
            <button type="submit" className="btn btn-default">Thêm</button> 
        </form>
      </div>
    );
  }
}

export default App;
