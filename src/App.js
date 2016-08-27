import React from 'react';

import {Router, Route, browserHistory} from 'react-router'


import Layout from './Layout';

import First from './First';
import Second from './Second';

class App extends React.Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <Route path="first" component={First}/>
                <Route path="second" component={Second}/>
            </Route>
        </Router>
    );
  }
}

export default App;
