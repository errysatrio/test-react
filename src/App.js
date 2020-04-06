import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Counter from './components/counter'
import About from './components/about'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const routes = [{
    path: '/',
    exact: true,
    component: Counter
  },
  {
    path : '/about',
    component: About
  }]
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map(el => <Route {...el}/>)}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
