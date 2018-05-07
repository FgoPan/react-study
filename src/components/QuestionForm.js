import React, {
	Component
} from 'react';

class QuestionForm extends Component {
	render() {
		return (
			<form className="form-horizontal clearfix">
                    <label htmlFor="title" >问题</label>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input id="title" name="title" type="text" className="form-control" placeholder="问题标题" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                  <textarea id="desc" name="desc" className="form-control" rows="5" placeholder="问题描述"></textarea>
                    </div>
                  </div>
                  <footer className="pull-right">
                    <button type="button" className="btn btn-default">取消</button>
                    <button type="button" className="btn btn-success">确定</button>
                  </footer>
                </form>

		);
	}
}

export default QuestionForm;