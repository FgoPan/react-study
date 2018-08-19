import React, { Component } from 'react';

class Overview extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    );
  }
}

export default Overview;
