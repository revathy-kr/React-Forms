import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import getDataReducer from './reducers';

const composeEnhancers = typeof window === "object" &&
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));
const store= createStore(getDataReducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;