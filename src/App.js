import React from 'react';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {Router, Route, browserHistory} from 'react-router'

import reducer from './reducers';

const store = createStore(reducer);

import Layout from './Layout';

import First from './First';
import Second from './Second';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <Route path="first" component={First}/>
            <Route path="second" component={Second}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
