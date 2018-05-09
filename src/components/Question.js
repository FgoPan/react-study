import React, {
  Component
} from 'react';

class Question extends Component {
  render() {
    let data = this.props.data.sort((a, b) => {
      return b.count - a.count
    })
    return (
      <div id="question">
      {
        data.map(item => {
        return <div className="media" key={item.id}>
                    <div className="media-left">
                      <button type="button" className="btn btn-default" onClick={this.props.handleCountUp.bind(this,item)}>
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">{item.count}</span>
                      </button>
                      <button type="button" className="btn btn-default" onClick={this.props.handleCountDown.bind(this,item)}>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                      </button>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
      })
      }
                </div>
    );
  }
}

export default Question;