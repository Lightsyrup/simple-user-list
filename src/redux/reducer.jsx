import { DELETE_USER, UP_USER_INFOMATION, EDIT_USER } from "./actionTypes.jsx";
import { deepClone } from "../utils/data.js";

const defaultState = {
	userList: []
};

export default (state = defaultState, action) => {
	if (action.type == UP_USER_INFOMATION) {
		defaultState.userList.push(action.payload);
		return defaultState;
	}

	if (action.type == DELETE_USER) {
		const newState = deepClone(state);
		newState.userList.splice(action.payload, 1);
		return newState;
	}

	if (action.type == EDIT_USER) {
		const newState = deepClone(state);
		newState.userList.map((item) => {
			if (item.id == action.itemId && action.payload.login) {
				item.login = action.payload.login;
			}
			if (item.id == action.itemId && action.payload.name) {
				item.name = action.payload.name;
			}
			if (item.id == action.itemId && action.payload.email) {
				item.email = action.payload.email;
			}
		});
		return newState;
	}

	return state;
};
