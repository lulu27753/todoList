import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constant.js';

let nextTodoId = 0; // 为每个产生的待办事项赋予一个唯一的 ID

export const addTodo = (text) => ({
	type: ADD_TODO,
	id: nextTodoId ++,
	text: text,
	completed: false
})

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id: id,
})

export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	id: id
})

export default (state = [], action) => {
		switch(action.type) {
			case ADD_TODO: {
				return [{
					id: action.id,
		      text: action.text,
		      completed: action.completed,
				}, ...state]
			};
			case TOGGLE_TODO: {
					return state.map((todoItem) => {
						if (todoItem.id === action.id) {
							console.log("todoItem.completed", todoItem.completed)
							return {...todoItem, completed: !todoItem.completed}
						} else {
							return todoItem
						}
					})
			};
			case REMOVE_TODO: {
				return state.filter((todoItem) => {
					return todoItem.id !== action.id
				})
			};
			default: {
				return state;
			}
		}
}
