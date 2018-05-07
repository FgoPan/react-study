import React, {
  Component
} from 'react';

class Question extends Component {
  render() {
    return (
      <div id="question">
                  <div className="media">
                    <div className="media-left">
                      <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">22</span>
                      </button>
                      <button type="button" className="btn btn-default">
                        <span className="glyphicon glyphicon-chevron-down"></span>
                      </button>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">产品经理与程序员的矛盾是什么？</h4>
                      <p>哈哈回复哈哈回复后大发看到了放大，发放的哈复读机啊，法师uu我而基金法巨轮智能女。</p>
                    </div>
                  </div>
                </div>
    );
  }
}

export default Question;