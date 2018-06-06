import {
  // 名前が被ってしまうので別名でimportする
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import tasksReducer from '../reducers/tasks';

// historyはsrc/index.jsから渡すようにする
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      // react-router-reduxのReducer
      router: routerReducer,
    }),
    applyMiddleware(
      logger,
      // react-router-reduxのRedux Middleware
      routerMiddleware(history)
    )
  );
}
