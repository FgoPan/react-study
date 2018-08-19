import React, { Component } from 'react';
import { Tabs } from 'antd';
import Overview from './Overview'
import Preview from './Preview'
import { Route } from 'react-router-dom';
const TabPane = Tabs.TabPane;

class Main extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	id:'',
	  	activeKey: ''
	  };
	}
	static getDerivedStateFromProps(props, state){
		if(props.match.params.id !== state.id){
			return {id: props.match.params.id, activeKey: props.location.pathname}
		}
		return null
	}
	onTabChange(key){
		this.setState({activeKey: key})
    	this.props.history.push(key)
	}
  render() {
    return (
      <Tabs onChange={this.onTabChange.bind(this)} activeKey={this.state.activeKey} type="card">
    <TabPane tab="概述" key={`/home/${this.state.id}/overview`}>
    	<Route exact path="/home/:id/overview" component={Overview}></Route>
    </TabPane>
    <TabPane tab="预览" key={`/home/${this.state.id}/preview`}>
    	<Route exact path="/home/:id/preview" component={Preview}></Route>
    </TabPane>
  </Tabs>
    );
  }
}

export default Main;
