import React from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import {Router, Route, browserHistory} from 'react-router'

import reducer from './reducers';


import Layout from './Layout';
import First from './pages/First';
import Counter from './pages/Counter'
import List from './pages/List';
import Form from './pages/Form';
import Model from './pages/Model';

class OurModel {
  constructor(state) {
    this.state = state;
  }
  set(obj) {
    this.state = {
      ...this.state,
      ...obj
    };
  }
  get(prp) {
    return this.state[prp];
  }
}``

const store = createStore(
  reducer,
  applyMiddleware(
    thunk,
    window.devToolsExtension && window.devToolsExtension()
  )
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <Route path="first" component={First}/>
            <Route path="counter" component={Counter}/>
            <Route path="list" component={List}/>
            <Route path="form" component={Form}/>
            <Route path="model" component={Model}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
