import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Home from './Home'
import Datamanage from './Datamanage'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      current:'home'
    };
  }
  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  }
  render() {
    return (
        <Router>
      <div className="App">
          <Menu
        onClick={this.handleClick}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="mail" /><Link to="/home">home</Link>
        </Menu.Item>
        <Menu.Item key="datamanage">
          <Link to="/datamanage">datamanage</Link>
        </Menu.Item>
      </Menu>
          <Route path="/home" component={Home}></Route>
          <Route path="/datamanage" component={Datamanage}></Route>
      </div>
        </Router>
    );
  }
}

export default App;
