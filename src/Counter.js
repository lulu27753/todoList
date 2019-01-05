import React from 'react';

export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		}
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);
	}
	onIncrement() {
		this.setState((state, props) => ({
			value: state.value + 1
		}));
	}
	onDecrement() {
		this.setState((state, props) => ({
			value: state.value - 1
		}));
	}

	render() {
		return (
			<div>
			  <h1>{this.state.value}</h1>
			  <button onClick={this.onIncrement}>+</button>
			  <button onClick={this.onDecrement}>-</button>
		  </div>
		)
	}
}