import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import TodoApp from './containers/TodoApp';
import Error from './components/Error';
import createStore from './store';

// historyのインスタンスを生成
const history = createBrowserHistory();

// Storeの生成
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {/* ルーティングさせる */}
        <Route exact path="/" component={TodoApp} />
        <Route path="/error" component={Error} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
