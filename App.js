import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import server1 from './components/servercards/server1';
import server2 from './components/servercards/server2';
import server3 from './components/servercards/server3';
import server4 from './components/servercards/server4';
import server5 from './components/servercards/server5';
import servers from './components/serverlist';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div className="App">
    <Nav />
     
     <Switch>
     <Route path= "/home" exact component={Home} />
    <Route path= "/server1" component={server1} />
     <Route path= "/server2" component={server2} />
     <Route path= "/server3" component={server3} />
     <Route path= "/server4" component={server4} />
     <Route path= "/server5" component={server5} />
     <Route path= "/servers" component={servers} />

     </Switch>
    </div>
    </Router>
  );
}

export default App;
