import React, {
  Component
} from 'react';
import QuestionForm from './components/QuestionForm.js'
import Question from './components/Question.js'
import AddQuestion from './components/AddQuestion.js'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAddQuestionVisible: false,
      question: [{
        id: 1,
        count: 10,
        title: '产品经理与程序员的矛盾是什么？',
        desc: '哈哈回复哈哈回复后大发看到了放大，发放的哈复读机啊，法师uu我而基金法巨轮智能女。'
      }]
    }
  }
  handleCancel() {
    this.setState({
      isAddQuestionVisible: !this.state.isAddQuestionVisible
    })
  }
  handleCountDown(q) {
    q.count--
      this.setState({
        question: this.state.question
      })
  }
  handleCountUp(q) {
    q.count++
      this.setState({
        question: this.state.question
      })
  }
  handleSubmit(title, desc) {
    let question = this.state.question
    question.push({
      id: new Date().getTime(),
      count: 0,
      title: title,
      desc: desc
    })
    this.setState({
      question: question
    })
    this.handleCancel()
  }
  static defaultProps = {
    title: 'React问答',
    btnText: '添加问题'
  };
  render() {
    return (
      <div>
          <div className="header container-fluid">
            <AddQuestion title={this.props.title} btnText={this.props.btnText} handleCancel={this.handleCancel.bind(this)}/>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <QuestionForm visible={this.state.isAddQuestionVisible} handleCancel={this.handleCancel.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
                <Question data={this.state.question} handleCountUp={this.handleCountUp.bind(this)} handleCountDown={this.handleCountDown.bind(this)}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;