import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'

import Todo from './components/Todo'
import ReactDOM from 'react-dom'

const initialState = {
  task: '',
  tasks: []
}

function tasksReducer (state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.task
      }
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.task])
      }
    default:
      return state;
  }
}

// ログミドルウェア
const logger = store => next => action => {
  // Action適用前のstateを表示
  console.log(store.getState())

  // どのようなActionが適用されたのかを表示
  console.log(action)

  const result = next(action)

  // Action適用後のstateを表示
  console.log(store.getState())
  console.log('-----------------')

  // 特別なreturnする必要がないのでresultをそのまま返す
  return result
}

const storageMiddleware = store => next => action => {
  const result = next(action)
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()))
  return result
}

const savedState = JSON.parse(localStorage.getItem('app-state'))
const store = createStore(
  tasksReducer,
  savedState ? savedState : tasksReducer(undefined, {type: 'Init'}),
  applyMiddleware(logger,storageMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
)

