import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/createStore';
import Home from '../layouts/Home';
// import Counter from '../../containers/counter/Counter';
// import App from '../app/App';
// import Chart from '../chart/Chart';
// import Deposits from '../deposits/Deposits';
// import Orders from '../orders/Orders.js';

const MainRouter = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home}>
            {/* <Route path="/Chart" component={Chart} />
            <Route path="/Orders" component={Orders} />
            <Route path="/Deposits" component={Deposits} />
            <Route path="/App" component={App} />
            <Route path="/Counter" component={Counter} /> */}
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
export default MainRouter;
