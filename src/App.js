import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from  './pages/Portfolio'
import Education from  './pages/Education'
import Contact from  './pages/Contact'


const App = () => {
    return (
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/education" component={Education}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/contact" component={Contact}/>
              <Redirect to="/" />
          </Switch>
        </BrowserRouter>

    );
};



export default App;
