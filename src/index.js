import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createHashHistory'
import App from './App'
import createStore from './createStore'

// historyのインスタンスを作成
const history = createBrowserHistory()

// Storeの生成
const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);