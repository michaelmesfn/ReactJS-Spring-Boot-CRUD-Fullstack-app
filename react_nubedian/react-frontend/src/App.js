import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListCpuComponent from './components/ListCpuComponent';
import UpdateCpuComponent from './components/UpdateCpuComponent';
import About from './components/About'

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path ="/" exact component = {ListCpuComponent} />
          <Route path ="/cpus" component = {ListCpuComponent} />
          <Route path ="/about" component = {About} />
          <Route path ="/update-cpu/:id" component = {UpdateCpuComponent} />
          {/* <ListCpuComponent /> */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
