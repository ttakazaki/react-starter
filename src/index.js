import React from 'react';
import { render } from 'react-dom';
import tasksReducer from "./reducers/tasks";
import TodoApp from './containers/TodoApp'
import { createStore } from "redux";
import { Provider } from 'react-redux';

const store = createStore(tasksReducer);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)