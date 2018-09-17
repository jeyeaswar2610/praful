import React from 'react';
import { HashRouter, NavLink, Route } from "react-router-dom";
import HomeComp from './component/home-component';
import AboutComp from './component/about-component';
import FrndComp from './component/frnd-component';


class App extends React.Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/friends">Friends</NavLink></li>
        </ul>
        <div>
          <Route exact path="/" component={HomeComp}/>
          <Route path="/about" component={AboutComp}/>
          <Route path="/friends" component={FrndComp}/>
        </div>    
      </div>
      </HashRouter>
    );
  }
}

export default App;
