import React, {
  Component
} from 'react';
import QuestionForm from './components/QuestionForm.js'
import Question from './components/Question.js'
import AddQuestion from './components/AddQuestion.js'
import './App.css';
class App extends Component {
  static defaultProps = {
        title:'React问答',
      btnText:'添加问题'
    };
  render() {
    return (
      <div>
          <div className="header container-fluid">
            <AddQuestion title={this.props.title} btnText={this.props.btnText}/>
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