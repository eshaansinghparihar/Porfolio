import React from 'react';
import { Switch, Route, Redirect ,BrowserRouter} from 'react-router-dom'
import Navigation from './Navigation';
import './App.css';
import Projects from './Projects';
import Blogs from './Blogs';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div>
      <Navigation/>
    <div>
     <Switch>
        <Route exact path="/" >
        <Home/>
        </Route>
        <Route exact path='/project' >
        <Projects/>
        </Route>
        <Route exact path='/blog' >
        <Blogs/>
        </Route>
        <Redirect to="/" />
     </Switch>
    </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
