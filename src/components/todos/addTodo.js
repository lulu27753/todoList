import React, { Component, PropTypes } from "react";
import {connect} from 'react-redux';
import {addTodo} from './reducer';

class AddTodo extends Component {
	constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = this.refInput.bind(this);
  }
	refInput(node) {
		this.input = node;
	}
	onSubmit(e) {
		e.preventDefault();

		const input = this.input;
		if (!input.value.trim()) return;
		this.props.onAdd(input.value);
		input.value = '';
	}
  render() {
    return (
    	<div className="add-todo">
				<form onSubmit={this.onSubmit}>
					<input className="new-todo" ref={this.refInput} />
					<button className="add-btn" type="submit">添加</button>
				</form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);

