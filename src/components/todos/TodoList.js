import React from "react";
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import TodoItem from "./TodoItem";
import { toggleTodo, removeTodo } from './reducer.js'
import {
ALL,
COMPLETED,
UNCOMPLETED 
} from '../constant.js'

const selectVisibleTodos = (todos, filter) => {

	switch (filter) {
		case ALL:
			return todos;
		case COMPLETED:
			return todos.filter(item => item.completed);
		case UNCOMPLETED:
			return todos.filter(item => !item.completed);
		default:
			throw new Error('unsupported filter')
	}
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  };
}

const mapDispatchToProps = (dispatch) => {
	console.log('dispatch', dispatch)
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    }
  };
};

/*
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}, dispatch);
*/


const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => (
	<ul className="todo-list">
		{todos.map((item) => (
					<TodoItem
						key={item.id}
						text={item.text}
						completed={item.completed}
						onToggle={ () => onToggleTodo(item.id) }
						onRemove={ () => onRemoveTodo(item.id) }
					/>
		))}
	</ul>
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
