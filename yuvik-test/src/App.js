import React from 'react';
import './App.scss';
import AllWeatherContainer from './components/allWeatherContainer/allWeatherContainer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/reduxStore";
import Settings from './components/settings/settings';


function App() {
  return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={AllWeatherContainer}></Route>
                <Route path="/settings" component={Settings}></Route>
            </Router>
        </Provider>
  );
}

export default App;
