import React, {
  Component
} from 'react';
import QuestionForm from './components/QuestionForm.js'
import Question from './components/Question.js'
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
          <div className="header container-fluid">
            <h1>React问答</h1>
            <button className="btn btn-success pull-right">添加问题</button>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <QuestionForm />
                <Question />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;