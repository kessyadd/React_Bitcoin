import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Info from './component/Info.js';
import Cusd from './component/Convert-bitcoin';
import Cidr from './component/Convert-idr.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/info'><button className="btn">Info Bitcoin</button></Link>
        <Link to='/cbit'><button className="btn">Convert to Bitcoin</button></Link>
        <Link to='/cidr'><button className="btn">Convert to IDR</button></Link>
        <div>
          <Route path='/info' component={Info}/>
          <Route path='/cbit' component={Cusd}/>
          <Route path='/cidr' component={Cidr}/>
        </div>
      </div>
    );
  }
}

export default App;
