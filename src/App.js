import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'



import ShoppingList from './ShoppingList';

import initialState from './store/initialState';
import rootReducer from './reducers';

import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
console.log('iniState',initialState);
let store = createStore(rootReducer,initialState);

class App extends Component {
  render() {
     
    return (
      <Provider store={store}>
        <div className="App">
           <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
