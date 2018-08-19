import React, { Component } from 'react';
import { Layout, Tree } from 'antd';
import Main from './Main'
import { Route } from 'react-router-dom';
const TreeNode = Tree.TreeNode;
const { Content, Sider } = Layout;


class Home extends Component {
  onSelect = (selectedKeys, info) => {
    if(info.selected === false){
      return 
    }
    let suffix = this.props.location.pathname.split('/')[3] || 'overview'
    this.props.history.push(`/home/${selectedKeys}/${suffix}`)
  }

  render() {
    return (
      <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
<Tree
        defaultExpandedKeys={['1', '2']}
        onSelect={this.onSelect.bind(this)}
      >
        <TreeNode title="parent 1" key="1">
          <TreeNode title="parent 1-0" key="2">
            <TreeNode title="leaf" key="3" />
            <TreeNode title="leaf" key="4" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="5">
            <TreeNode title={<span style={{ color: '#1890ff' }} title="我爱你">sss</span>} key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Route path="/home/:id" component={Main}></Route>
        </Content>
      </Layout>
      </Layout>
    );
  }
}

export default Home;
