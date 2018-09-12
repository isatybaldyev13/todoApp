import React, {Component} from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import AppRouter from './router'
import reducers from './reducers'
const store = createStore(reducers)
export default class TodoApp extends Component{
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

