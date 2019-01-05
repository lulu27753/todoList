import {
SET_FILTER,
ALL
} from '../constant.js'

export const setFilter = (filter) => ({
	type: SET_FILTER,
	filter: filter
})

export default (state = ALL, action) => {
	switch(action.type) {
		case SET_FILTER: {
			return action.filter;
		};
		default: {
			return state;
		}
	}
}

