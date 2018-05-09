import React, {
  Component
} from 'react';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.input = null
    this.desc = null
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(){
    let title = this.input.value
    let desc = this.desc.value
    if (title === '') {
      return
    }
    this.props.handleSubmit(title, desc)
  }
  render() {
    let form = null
    if (this.props.visible) {
      form = <form className="form-horizontal clearfix">
                    <label htmlFor="title" >问题</label>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input ref={input => {this.input = input}} id="title" name="title" type="text" className="form-control" placeholder="问题标题"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                  <textarea ref={input => {this.desc = input}} id="desc" name="desc" className="form-control" rows="5" placeholder="问题描述" ></textarea>
                    </div>
                  </div>
                  <footer className="pull-right">
                    <button type="button" className="btn btn-default" onClick={this.props.handleCancel}>取消</button>
                    <button type="button" className="btn btn-success" onClick={this.handleSubmit}>确定</button>
                  </footer>
                </form>
    }
    return (
      form
    );
  }
}

export default QuestionForm;