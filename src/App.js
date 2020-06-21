import React, { Component } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Todo app</h1>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
